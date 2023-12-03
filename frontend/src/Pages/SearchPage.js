/** @jsxImportSource @emotion/react */
import React from 'react'
import { v4 as uuid_v4 } from 'uuid'
import Header1 from '../components/Home/Header1'
import StudyCard from '../components/StudyCard'
import Container from '../components/global/Container'
import { css } from '@emotion/react'
import { useLocation } from 'react-router-dom'
import { api } from '../api'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function SearchPage() {
  const [filterParam, setFilterParam] = useState(['All'])

  const location = useLocation()
  const userInfo = { ...location.state }
  const targetWord = userInfo.targetWord
  const targetMajor = userInfo.targetMajor
  const [data, setData] = useState(null)
  const [majorList, setMajorList] = useState([])

  // 전공 목록 가져오기
  React.useEffect(() => {
    api
      .get('/major')
      .then((res) => {
        setMajorList(res.data.majors)
        // console.log(majorList)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // targetWord가 바뀔 때 마다 실행
  React.useEffect(() => {
    api
      .get('/clubs/searchs', {
        params: {
          keyword: targetWord,
          major: targetMajor,
        },
      })
      .then((response) => {
        setData(response.data)
        console.log(response.data)
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
    } else if (filterParam == 'All') {
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
    } else {
      return data.clubs
        .filter((item) => item.major.id == filterParam)
        .map((item) => (
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
  }

  return (
    <div>
      <Header1 />
      <Container>
        {/* 검색어 */}
        <div css={searchTitle}>&apos;{targetWord}&apos; 검색 결과</div>
        <div css={cardContainer}>
          <div css={categorySection}>
            <select
              defaultValue={targetMajor}
              key={uuid_v4()}
              css={selectStyle}
              onChange={(e) => {
                setFilterParam(e.target.value)
              }}
            >
              <option key={uuid_v4()} value="All">
                전체
              </option>
              {majorList.map((item) => (
                <option key={uuid_v4()} value={item.id}>
                  {item.name}
                </option>
              ))}

              {/* <option value="All">전체</option>
              <option value="software">소프트웨어학과</option>
              <option value="math">수학과</option>
              <option value="english">영어영문학과</option>
              <option value="culture">교양</option>
              <option value="job">취업</option> */}
            </select>
          </div>
          <div>
            <div css={cardSection}>{displayData()}</div>
          </div>
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
const cardContainer = css`
  margin-left: 200px;
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top: 60px;
`

const categorySection = css`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
  margin-right: 10px;
`
const cardSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`

const selectStyle = css`
  font-family: Pretendard;
  margin-top: 15px;
  display: flex;
  width: 150px;
  height: 40px;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--gray-gray-1, #f7f7f7);
  border: 1px solid var(--gray-gray-2, #ccc);
`
export default SearchPage
