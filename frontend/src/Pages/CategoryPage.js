/** @jsxImportSource @emotion/react */
import React from 'react'
import Header1 from '../components/Home/Header1'
import StudyCard from '../components/StudyCard'
import Container from '../components/global/Container'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { api } from '../api'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function CategoryPage() {
  const location = useLocation()
  const userInfo = { ...location.state }
  const targetCat = userInfo.targetCat
  const [data, setData] = useState(null)

  React.useEffect(() => {
    api
      .get('/clubs/searchs', {
        params: {
          keyword: targetCat,
        },
      })
      .then((response) => {
        setData(response.data)
      })
  }, [targetCat])

  //Todo: 카테고리별 스터디 조회 API 연결

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
    return data.clubs.map((item) => (
      <Link key={item.id} to={`/detail/${item.id}`}>
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
      </Link>
    ))
  }

  return (
    <div>
      <Header1 />
      <Container>
        {/* 검색어 */}
        <div css={searchTitle}>&apos;{targetCat}&apos;</div>
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
export default CategoryPage
