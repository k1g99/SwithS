/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar2 from '../components/Sidebar2'
import ResourceCard from '../components/ResourceCard'
import { Link, useParams } from 'react-router-dom'
import { api } from '../api'

function ResourcePage() {
  const params = useParams()
  const clubId = params.study_id

  const [clubDetail, setClubDetail] = useState([])
  const [resourceList, setResourceList] = useState([])

  useEffect(() => {
    api
      .get('/file/list')
      .then((res) => {
        setResourceList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    api
      .get(`/clubs/${clubId}`)
      .then((res) => {
        setClubDetail(res.data)
        // console.log(clubDetail)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const displayResource = resourceList.map((resource, index) => {
    return <ResourceCard key={index} resourceTitle={resource} />
  })
  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>{clubDetail.name}</div>
        <div css={roomSection}>
          <div css={leftSection}>
            <Sidebar2 clubId={clubId} />
          </div>
          <div css={rightSection}>
            <div css={buttonBox}>
              <Link to={`/resourceupload/${clubId}`}>
                <button css={writeBtn}>자료 업로드</button>
              </Link>
            </div>
            <div css={cardBox}>{displayResource}</div>
          </div>
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
const roomSection = css`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  justify-content: center;
  gap: 54px;
`
const leftSection = css``

const rightSection = css`
  display: inline-flex;
  flex-direction: column;
  width: 67%;
`

const buttonBox = css`
  margin-top: 8px;
  margin-bottom: 20px;
`
const writeBtn = css`
  float: right;
  display: flex;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 999px;
  border: 1.5px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
`

const cardBox = css`
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

export default ResourcePage
