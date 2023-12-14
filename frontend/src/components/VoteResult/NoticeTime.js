import '../Vote.css'
import React from 'react'
import { times } from './setTime'

const NoticeTime = () => {
  return (
    <div>
      {times.map((t) => (
        <span
          key={`${t.h}-${t.m}`}
          className={`time-slott ${t.m === 0 ? 'zero-mm' : ''} ${
            t.m === 45 ? 'f-mm' : ''
          }`}
        >
          {t.m === 0 ? `${t.h}:00` : ''}
        </span>
      ))}
    </div>
  )
}

export { NoticeTime }
