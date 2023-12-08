/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar2 from '../components/Sidebar2'
import NoticeCard from '../components/NoticeCard'
import { Link } from 'react-router-dom'

function StudyroomPage() {
  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>스터디명</div>
        <div css={roomSection}>
          <div css={leftSection}>
            <Sidebar2 />
          </div>
          <div css={rightSection}>
            <div css={buttonBox}>
              <Link to="/noticeupload">
                <button css={writeBtn}>공지 업로드</button>
              </Link>
            </div>
            <div css={cardBox}>
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
              <NoticeCard />
            </div>
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

export default StudyroomPage
