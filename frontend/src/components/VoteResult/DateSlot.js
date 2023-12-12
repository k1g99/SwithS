import '../Vote.css'
import { TimeSlot } from './TimeSlot'
import { NoticeTime } from './NoticeTime'
import React from 'react'

const DateSlot = (props) => {
  if (!props.vote || !props.club || !props.selected || !props.userNum) {
    // 만약 vote 또는 club이 undefined이면 아무것도 하지 않음
    return null
  }

  const { endAt, startAt } = props.vote
  const endDate = new Date(endAt)
  const startDate = new Date(startAt)
  const unavailableTime = []
  const bitmaskDay = [
    BigInt(props.club.timetable_sun),
    BigInt(props.club.timetable_mon),
    BigInt(props.club.timetable_tue),
    BigInt(props.club.timetable_wed),
    BigInt(props.club.timetable_thu),
    BigInt(props.club.timetable_fri),
    BigInt(props.club.timetable_sat),
  ]
  const selected = props.selected
  const userNum = props.userNum
  console.log(selected, userNum)

  const setDateList = () => {
    const dateList = []
    let calDate = new Date(startDate)
    while (calDate <= endDate) {
      const newDate = new Date(calDate)
      const dayIndex = newDate.getDay()
      const bitmaskForDay = bitmaskDay[dayIndex]

      for (let timeIndex = 0n; timeIndex <= 15n * 4n; timeIndex++) {
        if ((bitmaskForDay & (1n << timeIndex)) !== 0n) {
          const hour = Number(timeIndex / 4n) + 9
          const minute = Number((timeIndex % 4n) * 15n)
          const unavailableDateTime = new Date(
            newDate.getFullYear(),
            newDate.getMonth(),
            newDate.getDate(),
            hour,
            minute,
            0
          )
          unavailableTime.push(unavailableDateTime)
        }
      }

      dateList.push(newDate)

      calDate.setDate(calDate.getDate() + 1)
    }
    return dateList
  }

  return (
    <div className="time-table">
      <div className="time-container">
        <h3 className="h3123">시간</h3>
        <div className="time-slots">
          <NoticeTime />
        </div>
      </div>
      {setDateList().map((date) => (
        <div className="time-container" key={date}>
          <h3 className="h3123">
            {date.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
            })}
          </h3>
          <div className="time-slots">
            <TimeSlot
              date={date}
              unavailableTime={unavailableTime}
              selected={selected}
              userNum={userNum}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export { DateSlot }
