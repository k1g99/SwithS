import React, { useState } from 'react'
import './Vote.css'
import { DateSlot } from './Vote/DateSlot.js'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { selectedTimeState } from './Vote/recoilState.js'
import { api } from '../api' // api 모듈을 import

const Vote = (prop) => {
  const selectedTime = useRecoilValue(selectedTimeState)
  const resetSelectedTime = useResetRecoilState(selectedTimeState)
  const [club, setClub] = useState()
  const [vote, setVote] = useState()
  const voteId = prop.voteId
  const clubId = prop.clubId

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const userId = localStorage.getItem('id')

  const handlePrintSelectedTime = () => {
    selectedTime.forEach((timeString) => {
      const [month, day, hour, minute] = timeString.split('-').map(Number)

      const startAt = new Date(currentYear, month - 1, day, hour + 9, minute, 0)
      const endAt = new Date(startAt)

      endAt.setMinutes(endAt.getMinutes() + 15)
      console.log(selectedTime)
      console.log(startAt.toISOString(), endAt.toISOString(), voteId)
      api
        .post(`/vote/detail/${voteId}/${userId}`, {
          user: userId,
          vote: voteId,
          startAt: startAt.toISOString(), // 변환된 날짜를 ISO 문자열로 변환
          endAt: endAt.toISOString(),
        })
        .then((res) => {
          console.log(res)
          window.location.reload()
        })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  React.useEffect(() => {
    resetSelectedTime()
    const fetchData = async () => {
      try {
        const voteResponse = await api.get(`/vote/${voteId}`)
        setVote(voteResponse.data.voteDto)

        const clubResponse = await api.get(`/clubs/${clubId}`)
        setClub(clubResponse.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData() // 비동기 호출 함수 실행

    // 이펙트의 의존성 배열이 비어있으므로, 컴포넌트가 마운트될 때 한 번만 호출
  }, [voteId, clubId, resetSelectedTime])

  return (
    <div className="Vote">
      <div className="time-table">
        <DateSlot vote={vote} club={club} />
      </div>
      <button className="buttonkkkk" onClick={handlePrintSelectedTime}>
        등록하기
      </button>
    </div>
  )
}

export default Vote
