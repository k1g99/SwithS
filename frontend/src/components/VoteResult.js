import React, { useState } from 'react'
import './VoteResult.css'
import { DateSlot } from './VoteResult/DateSlot.js'
import { useResetRecoilState } from 'recoil'
import { selectedTimeState } from './VoteResult/recoilState.js'
import { api } from '../api.js'

const Vote = (prop) => {
  const resetSelectedTime = useResetRecoilState(selectedTimeState)
  const [club, setClub] = useState()
  const [vote, setVote] = useState()
  const [selected, setSelected] = useState()
  const [userNum, setUserNum] = useState()
  const voteId = prop.voteId
  const clubId = prop.clubId

  React.useEffect(() => {
    resetSelectedTime()
    const fetchData = async () => {
      try {
        const voteResponse = await api.get(`/vote/${voteId}`)
        setVote(voteResponse.data.voteDto)

        const clubResponse = await api.get(`/clubs/${clubId}`)
        setClub(clubResponse.data)

        const ResultResponse = await api.get(`/vote/detail/${voteId}`)
        setSelected(ResultResponse.data.voteItemDetailList)

        const UserNumResponse = await api.get(`userclub/clubs/${clubId}/user`)
        setUserNum(UserNumResponse.data.users.length)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData() // 비동기 호출 함수 실행

    // 이펙트의 의존성 배열이 비어있으므로, 컴포넌트가 마운트될 때 한 번만 호출
  }, [voteId, clubId, resetSelectedTime])

  return (
    <div className="time-table">
      <DateSlot vote={vote} club={club} selected={selected} userNum={userNum} />
    </div>
  )
}

export default Vote
