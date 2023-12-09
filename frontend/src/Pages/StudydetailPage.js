/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import DetailText from '../components/DetailText'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Button2 from '../components/Button2'
import { api } from '../api'
import { useNavigate } from 'react-router'

function StudydetailPage() {
  const navigate = useNavigate()
  const params = useParams()
  const clubId = params.item_id
  const [data, setData] = useState({})

  useEffect(() => {
    axios
      .get(`/clubs/${clubId}`)
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [clubId])

  const joinStudy = (e) => {
    e.preventDefault()

    const userId = localStorage.getItem('id')

    api
      .post(`/userclub/clubs/${clubId}/user/${userId}`)
      .then((res) => {
        alert('스터디에 참여했습니다.')
        console.log(res)
        navigate('/mystudy')
      })
      .catch((err) => {
        alert('스터디 참여에 실패했습니다.')
        console.log(err)
      })
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={datailSection}>
          <div css={titleContainer}>
            <div css={studytitle}>{data.name}</div>
            <div css={studyDate}>
              {'스터디 진행 기간 :  ' +
                new Date(data.startAt).toLocaleDateString() +
                ' ~ ' +
                new Date(data.endAt).toLocaleDateString()}
            </div>
          </div>
          <div css={topContainer}>
            <div css={detailBox}>
              <DetailText category={'모집구분'} text={data.category} />
              <DetailText category={'모집인원'} text={data.numRecruit} />
            </div>
            <div css={detailBox}>
              <DetailText category={'전공'} text={data.major} />
              <DetailText
                category={'모집기간'}
                text={
                  new Date(data.register_startAt).toLocaleDateString() +
                  ' ~ ' +
                  new Date(data.register_endAt).toLocaleDateString()
                }
              />
            </div>
          </div>
          <div css={bottomContainer}>
            <div css={infoTitle}>설명</div>
            <div css={infoText}>{data.description}</div>
          </div>
          <div css={buttonBox}>
            <Button2 text={'참여하기'} onClick={joinStudy} />
          </div>
        </div>
      </Container>
    </div>
  )
}

const datailSection = css`
  margin-left: 200px;
  width: 80%;
`
const titleContainer = css`
  margin-top: 60px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray-gray-3, #e0e0e0);
`
const studytitle = css`
  color: var(--green-green, #1d482e);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`

const studyDate = css`
  margin-top: 10px;
  color: var(--gray-gray-5, #262626);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`

const topContainer = css`
  margin-top: 40px;
  display: flex;
  gap: 160px;
`

const detailBox = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const bottomContainer = css`
  margin-top: 80px;
`

const infoTitle = css`
  color: var(--green-green, #1d482e);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray-gray-3, #e0e0e0);
`

const infoText = css`
  margin-top: 30px;
  height: 200px;
  color: var(--gray-gray-5, #262626);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`
const buttonBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 130px;
`
export default StudydetailPage
