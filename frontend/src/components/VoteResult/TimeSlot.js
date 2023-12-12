import '../Vote.css'
import { times } from './setTime'
import React from 'react'

const TimeSlot = (props) => {
  if (!props.selected || !props.userNum) {
    return null
  }

  const selected = props.selected
  const userNum = props.userNum

  const calculatePercentage = (count) => {
    return Math.round((count / userNum) * 100)
  }

  return (
    <div>
      {times.map((t) => {
        const m = new Date(props.date).getMonth() + 1
        const d = new Date(props.date).getDate()

        const keyValue = `${m}-${d}-${t.h}-${t.m}`
        const count = selected.filter((time) => {
          const startTime = new Date(time.startAt)
          const startMonth = startTime.getMonth() + 1
          const startDay = startTime.getDate()
          const startHour = startTime.getHours()
          const startMinute = startTime.getMinutes()

          return (
            startMonth === m &&
            startDay === d &&
            startHour === t.h &&
            startMinute === t.m
          )
        }).length

        const percentage = calculatePercentage(count)

        let className = `time-slot ${t.m === 0 ? 'zero-m' : ''} ${
          t.m === 45 ? 'f-m' : ''
        }`

        if (percentage < 25) {
          className += ' selected0'
        } else if (percentage < 50) {
          className += ' selected25'
        } else if (percentage < 75) {
          className += ' selected50'
        } else if (percentage < 100) {
          className += ' selected75'
        } else if (percentage === 100) {
          className += ' selected100'
        }

        return (
          <span
            id={`${m}-${d}-${t.h}-${t.m}`}
            key={keyValue}
            className={className}
          ></span>
        )
      })}
    </div>
  )
}

export { TimeSlot }
