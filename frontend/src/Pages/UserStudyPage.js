/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import { api } from '../api'
import { Link } from 'react-router-dom'
import StudyCard from '../components/StudyCard'

function UserStudyPage() {
  const user_id = localStorage.getItem('id')
  const [clubList, setClubList] = useState([])

  // 테스트 용 --> 지워라!!!!
  useEffect(() => {
    api
      .get('/clubs/searchs', {
        params: {
          keyword: '',
          major: 1,
        },
      })
      .then((response) => {
        setClubList(response.data.clubs)
        // console.log(response.data)
      })

    console.log(user_id)
  }, [])

  // useEffect(() => {
  //   api
  //     .get(`user/${user_id}/club`)
  //     .then((res) => {
  //       setClubList(res.data.clubs)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }, [])

  const displayData = () => {
    return clubList.map((item) => (
      <Link key={item.id} to={`/studyroom/${item.id}`}>
        <StudyCard
          key={item.id}
          studyName={item.name}
          studyCategory={item.category}
          studyPeriod={
            new Date(item.startAt).toLocaleDateString() +
            ' ~ ' +
            new Date(item.endAt).toLocaleDateString()
          }
          studyDescription={
            item.description.length > 20
              ? item.description.substring(0, 20) + '...'
              : item.description
          }
        />
      </Link>
    ))
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>나의 스터디</div>

        <div css={cardContainer}>
          <div css={cardSection}>{displayData()}</div>
        </div>
      </Container>
    </div>
  )
}

const studyName = css`
  margin-top: 60px;
  margin-left: 200px;
  color: var(--green-green, #1d482e);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`

const cardSection = css`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
  margin-bottom: 60px;
`
const cardContainer = css`
  margin-left: 200px;
  display: flex;
  width: 80%;
  flex-direction: column;
  margin-top: 60px;
`

export default UserStudyPage
