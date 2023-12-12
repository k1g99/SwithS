import React, { useState, useEffect } from 'react'
import './Timetable.css'
import { api } from '../api'

const Timetable = (props) => {
  const [bitmaskData, setBitmaskData] = useState({
    timetable_mon: BigInt(0),
    timetable_tue: BigInt(0),
    timetable_wed: BigInt(0),
    timetable_thu: BigInt(0),
    timetable_fri: BigInt(0),
    timetable_sat: BigInt(0),
    timetable_sun: BigInt(0),
  })

  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일']

  useEffect(() => {
    const { clubId } = props
    const userId = localStorage.getItem('id')

    if (clubId) {
      api
        .get(
          `http://localhost:8080/api/userclub/clubs/${clubId}/user/${userId}`
        )
        .then((res) => {
          console.log(res.data)
          const timetableData = res.data.timetables || [0, 0, 0, 0, 0, 0, 0]
          setBitmaskData({
            timetable_mon: BigInt(timetableData[0]),
            timetable_tue: BigInt(timetableData[1]),
            timetable_wed: BigInt(timetableData[2]),
            timetable_thu: BigInt(timetableData[3]),
            timetable_fri: BigInt(timetableData[4]),
            timetable_sat: BigInt(timetableData[5]),
            timetable_sun: BigInt(timetableData[6]),
          })
          console.log(timetableData)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [props.clubId])

  const getTimeIndex = (time) => {
    const [hour, minute] = time.split(':').map(Number)
    return BigInt((hour - 9) * 4 + minute / 15)
  }

  const isTimeAvailable = (dayIndex, timeIndex) => {
    return (
      (bitmaskData[Object.keys(bitmaskData)[dayIndex]] &
        (BigInt(1) << timeIndex)) ===
      BigInt(0)
    )
  }

  const renderTimeSlots = () => {
    const timeContainers = []
    const timeSlots = []
    for (let hour = 9; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time = `${hour}:${minute === 0 ? '00' : minute}`
        const is00Minute = minute === 0

        timeSlots.push(
          <span
            className={`time-slott ${minute === 0 ? 'zero-mm' : ''}
          ${minute === 45 ? 'f-mm' : ''}`}
          >
            {is00Minute ? time : ''}
          </span>
        )
      }
    }
    timeContainers.push(
      <div className="time-container">
        <h3>시간</h3>
        <div className="time-slots">{timeSlots}</div>
      </div>
    )

    for (let dayIndex = 0; dayIndex < daysOfWeek.length; dayIndex++) {
      const timeSlots = []
      const day = daysOfWeek[dayIndex]

      for (let hour = 9; hour < 24; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
          const time = `${hour}:${minute === 0 ? '00' : minute}`

          const timeIndex = getTimeIndex(time)
          const isAvailable = isTimeAvailable(dayIndex, timeIndex)

          timeSlots.push(
            <span
              key={`${day}-${time}`}
              className={`time-slot ${isAvailable ? '' : 'unavailable'} ${
                minute === 0 ? 'zero-m' : ''
              } ${minute === 45 ? 'f-m' : ''}`}
            ></span>
          )
        }
      }

      timeContainers.push(
        <div key={day} className="time-container">
          <h3>{day}</h3>
          <div className="time-slots">{timeSlots}</div>
        </div>
      )
    }

    return timeContainers
  }

  return (
    <div className="time-table">
      <div className="time-slots-container">{renderTimeSlots()}</div>
    </div>
  )
}

export default Timetable
