/** @jsxImportSource @emotion/react */
import React from 'react'
import Header1 from '../components/Home/Header1'
import StudyCard from '../components/StudyCard'
import Container from '../components/global/Container'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { api } from '../api'
import { useState } from 'react'

function SearchPage() {
  const location = useLocation()
  const userInfo = { ...location.state }
  const targetWord = userInfo.targetWord
  const [data, setData] = useState(null)

  // targetWord가 바뀔 때 마다 실행
  React.useEffect(() => {
    api
      .get('/clubs/searchs', {
        params: {
          keyword: targetWord,
        },
      })
      .then((response) => {
        setData(response.data)
      })
  }, [targetWord])

  const checkState = (startAt, endAt) => {
    const today = new Date()
    const startDate = new Date(startAt)
    const endDate = new Date(endAt)

    if (today < startDate) {
      return '모집 전'
    } else if (today > endDate) {
      return '모집 종료'
    } else {
      return '모집 중'
    }
  }

  const displayData = () => {
    // data가 null인 경우 "없습니다" 반환, 있는 경우 data 반환
    if (data === null) {
      return '검색 결과가 없습니다.'
    } else {
      return data.clubs.map((item) => (
        <StudyCard
          key={item.id}
          studyName={item.name}
          studyCategory={item.category}
          studyState={checkState(item.registerStartAt, item.registerEndAt)}
          studyPeriod={
            new Date(item.startAt).toLocaleDateString() +
            ' ~ ' +
            new Date(item.endAt).toLocaleDateString()
          }
        />
      ))
    }
  }

  return (
    <div>
      <Header1 />
      <Container>
        {/* 검색어 */}
        <div css={searchTitle}>&apos;{targetWord}&apos; 검색 결과</div>
        <div css={cardContainer}>
          <div css={cardSection}>{displayData()}</div>
        </div>
      </Container>
    </div>
  )
}

const searchTitle = css`
  margin-top: 60px;
  margin-left: 200px;
  color: var(--green-green, #1d482e);
  /* Display/Display */
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`

const cardSection = css`
  width: 80%;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
`
const cardContainer = css`
  justify-content: center;
  display: flex;
`
export default SearchPage
