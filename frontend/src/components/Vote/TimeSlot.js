import '../Vote.css'
import { times } from './setTime'
import { useState, useRef, React } from 'react'
import { useRecoilState } from 'recoil'
import { selectedTimeState } from './recoilState'

const TimeSlot = (prop) => {
  const currentYear = new Date().getFullYear()
  const unavailableTime = prop.unavailableTime
  const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState)
  const [isDragging, setIsDragging] = useState(false)
  const startDragTimeRef = useRef()
  const prevDragRef = useRef()

  const dateToKey = (date) => {
    const dString = date.toString().split(':')
    const m = date.getMonth() + 1
    const d = date.getDate()
    const leng = dString[0].length
    const h = dString[0][leng - 2] + dString[0][leng - 1]
    const min = dString[1]
    return `${Number(m)}-${Number(d)}-${Number(h)}-${Number(min)}`
  }

  // selectedTime에 있으면 빼고 없으면 넣는 함수, addTimeList은 배열형태
  const addSelectedTime = (addTimeList) => {
    const unavailableFormatList = unavailableTime.map((t) => {
      const currentM = new Date(prop.date).getMonth() + 1
      const currentD = new Date(prop.date).getDate()

      const unvM = t.getMonth() + 1
      const unvD = t.getDate()
      if (currentM === unvM && currentD === unvD) {
        return dateToKey(t)
      }
    })
    // selectedTime에 없는 새로운 시간 = 추가되는 시간
    const newItem = addTimeList.filter((t) => {
      return !selectedTime.includes(t) && !unavailableFormatList.includes(t)
    })
    // selectedTime에서 제거되지 않는 시간
    const notSubItem = selectedTime.filter((t) => {
      return !addTimeList.includes(t)
    })
    setSelectedTime([...newItem, ...notSubItem])
  }

  const handleMouseDown = (e) => {
    setIsDragging(true)
    const targetId = e.target.id.split('-')
    const m = targetId[0]
    const d = targetId[1]
    const h = targetId[2]
    const min = targetId[3]
    const date = new Date(currentYear, m - 1, d, h, min, 0)
    const unAvailable =
      unavailableTime.filter((t) => {
        return t.getTime() === date.getTime()
      }).length === 0

    startDragTimeRef.current = { m, d, h, min } // 날짜 정보 추가

    if (unAvailable) {
      addSelectedTime([`${m}-${d}-${h}-${min}`]) // 키 값에 날짜도 추가
    }
  }

  const getTimeRange = (startIdx, endIdx) => {
    const minIdx = Math.min(startIdx, endIdx)
    const maxIdx = Math.max(startIdx, endIdx)
    const timeRange = []
    for (let i = minIdx; i <= maxIdx; i++) {
      timeRange.push(
        `${startDragTimeRef.current.m}-${startDragTimeRef.current.d}-${times[i].h}-${times[i].m}`
      )
    }
    return timeRange
  }

  const handleMouseMove = (e) => {
    if (isDragging && prevDragRef.current !== e.target.id) {
      const prevH = prevDragRef.current
        ? prevDragRef.current.split('-')[2]
        : startDragTimeRef.current.h
      const prevM = prevDragRef.current
        ? prevDragRef.current.split('-')[3]
        : startDragTimeRef.current.min
      let prevIdx = times.findIndex(
        (t) => t.h === Number(prevH) && t.m === Number(prevM)
      )

      const targetId = e.target.id.split('-')
      const h = targetId[2]
      const min = targetId[3]
      const endIdx = times.findIndex(
        (t) => t.h === Number(h) && t.m === Number(min)
      )
      if (prevIdx !== endIdx) {
        if (prevIdx + 1 === endIdx) {
          addSelectedTime([
            `${startDragTimeRef.current.m}-${startDragTimeRef.current.d}-${h}-${min}`,
          ])
        } else {
          addSelectedTime(getTimeRange(prevIdx + 1, endIdx))
        }
      }

      prevDragRef.current = e.target.id
    }
  }
  const handleMouseUp = () => {
    setIsDragging(false)
    startDragTimeRef.current = null
    prevDragRef.current = null
  }

  return (
    <div
      onMouseDown={(e) => handleMouseDown(e)}
      onMouseUp={() => handleMouseUp()}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      {times.map((t) => {
        const m = new Date(prop.date).getMonth() + 1
        const d = new Date(prop.date).getDate()
        const date = new Date(currentYear, m - 1, d, t.h, t.m, 0)
        const keyValue = `${m}-${d}-${t.h}-${t.m}`
        const unAvailable =
          unavailableTime.filter((ut) => {
            return ut.getTime() === date.getTime()
          }).length === 0

        return (
          <span
            id={`${m}-${d}-${t.h}-${t.m}`}
            key={keyValue}
            className={`time-slot ${
              selectedTime.includes(keyValue) ? 'selected' : ''
            } ${unAvailable ? '' : 'unavailable'} ${t.m === 0 ? 'zero-m' : ''}
          ${t.m === 45 ? 'f-m' : ''}`}
          ></span>
        )
      })}
    </div>
  )
}

export { TimeSlot }
