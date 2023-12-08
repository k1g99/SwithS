import React, { useRef, useState } from 'react'
import './Vote.css'

const Vote = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [selectedTimesByDate, setSelectedTimesByDate] = useState({})
  const startDragTimeRef = useRef(null)
  const bitmaskData = useRef([2015, 8253440, 2015, 8253440, 4095, 0, 0])
  const startDate = new Date('2023-09-14')
  const endDate = new Date('2023-09-20')

  const getTimeIndex = (time) => {
    const [hour, minute] = time.split(':').map(Number)
    return (hour - 9) * 4 + minute / 15
  }

  const getDayIndex = (date) => {
    return date.getDay() // 0 (일요일)부터 6 (토요일)까지의 값 반환
  }

  const isTimeAvailable = (dayIndex, timeIndex) => {
    // dayIndex에 따른 비트마스크에서 해당 시간의 비트 확인 (0이면 선택 가능, 1이면 선택 불가능)
    return (bitmaskData.current[dayIndex] & (1 << timeIndex)) === 0
  }

  const handleMouseDown = (dateKey, time) => {
    setIsDragging(true)
    startDragTimeRef.current = { dateKey, time }
    handleTimeClick(dateKey, time)
  }

  const handleMouseMove = (dateKey, time) => {
    if (isDragging) {
      const startIdx = getTimeIndex(startDragTimeRef.current.time)
      const endIdx = getTimeIndex(time)
      const selectedRange = getTimeRange(startIdx, endIdx)
      setSelectedTimesByDate((prevSelectedTimes) => {
        const updatedSelectedTimes = { ...prevSelectedTimes }
        updatedSelectedTimes[startDragTimeRef.current.dateKey] = selectedRange
        return updatedSelectedTimes
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    startDragTimeRef.current = null
  }

  const handleTimeClick = (dateKey, time) => {
    setSelectedTimesByDate((prevSelectedTimes) => {
      const updatedSelectedTimes = { ...prevSelectedTimes }
      const dateTimes = updatedSelectedTimes[dateKey] || []
      const timeIndex = getTimeIndex(time)

      // 해당 시간이 선택 가능한지 확인
      const dayIndex = getDayIndex(new Date(dateKey))
      if (isTimeAvailable(dayIndex, timeIndex)) {
        // 클릭한 시간이 이미 선택되어 있으면 제거, 아니면 추가
        updatedSelectedTimes[dateKey] = dateTimes.includes(time)
          ? dateTimes.filter((selectedTime) => selectedTime !== time)
          : [...dateTimes, time]
      }

      return updatedSelectedTimes
    })
  }

  const getTimeRange = (startIdx, endIdx) => {
    const minIdx = Math.min(startIdx, endIdx)
    const maxIdx = Math.max(startIdx, endIdx)

    const timeRange = []
    for (let i = minIdx; i <= maxIdx; i++) {
      const hour = Math.floor(i / 4) + 9 // 9를 더해야 실제 시간을 얻을 수 있음
      const minute = (i % 4) * 15
      const time = `${hour}:${minute === 0 ? '00' : minute}`
      timeRange.push(time)
    }

    return timeRange
  }

  const renderTimeSlots = () => {
    const containers = []

    const timeSlots = []
    for (let hour = 9; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`
        timeSlots.push(
          <span className={`time-slot time`}>{minute === 0 ? time : ''}</span>
        )
      }
    }

    containers.push(
      <div className="time-container">
        <h3>시간</h3>
        <div className="time-slots">{timeSlots}</div>
      </div>
    )

    let currentDate = new Date(startDate)
    while (currentDate <= endDate) {
      const timeSlots = []
      const dateKey = currentDate.toISOString()
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
      })
      const selectedTimes = selectedTimesByDate[dateKey] || []

      for (let hour = 9; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour}:${minute === 0 ? '00' : minute}`
          const is00Minute = minute === 0
          const is15Minute = minute === 15
          const is30Minute = minute === 30
          const is45Minute = minute === 45

          const borderStyle = {
            borderTop: is00Minute ? '1px solid black' : '',
            borderLeft:
              is00Minute || is15Minute || is30Minute || is45Minute
                ? '1px solid black'
                : '',
            borderRight:
              is00Minute || is15Minute || is30Minute || is45Minute
                ? '1px solid black'
                : '',
            borderBottom: is45Minute ? '1px solid black' : '',
          }

          const isSelected = selectedTimes.includes(time)
          const timeIndex = getTimeIndex(time)

          const dayIndex = getDayIndex(currentDate)
          const isAvailable = isTimeAvailable(dayIndex, timeIndex)

          timeSlots.push(
            <span
              key={`${dateKey}-${time}`}
              style={borderStyle}
              className={`time-slot ${isSelected ? 'selected' : ''} ${
                isAvailable ? '' : 'unavailable'
              }`}
              onMouseDown={() => isAvailable && handleMouseDown(dateKey, time)}
              onMouseUp={() => isAvailable && handleMouseUp(dateKey, time)}
              onMouseMove={() =>
                isAvailable ? handleMouseMove(dateKey, time) : null
              }
              onClick={() => isAvailable && handleTimeClick(dateKey, time)}
            ></span>
          )
        }
      }

      containers.push(
        <div key={dateKey} className="time-container">
          <h3>{formattedDate}</h3>
          <div className="time-slots">{timeSlots}</div>
        </div>
      )

      // 다음 날짜로 이동
      currentDate.setDate(currentDate.getDate() + 1)
    }

    return containers
  }

  return (
    <div className="time-table">
      <h2>Available Times</h2>
      {renderTimeSlots()}
    </div>
  )
}

export default Vote
