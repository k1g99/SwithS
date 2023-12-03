/** @jsxImportSource @emotion/react */
import React from 'react'
import Header2 from '../components/Home/Header2'
import Sidebar2 from '../components/Sidebar2'
import Container from '../components/global/Container'
import { css } from '@emotion/react'
import Comment from '../components/Comment'

function NoticedetailPage() {
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
            <div css={title}>공지사항 타이틀</div>
            <div css={writerBox}>
              <div css={writer}>김이지</div>
            </div>
            <div css={textBox}>
              <div css={headerText}>
                어쩌저쩌어쩌저쩌어쩌저쩌어쩌저쩌어쩌저쩌
              </div>
            </div>
            <div>
              <Comment />
              <Comment />
              <Comment />
            </div>
            <div css={writeBox}>
              <textarea css={writeText}>아아</textarea>
              <button css={writeBtn}>작성하기</button>
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
const title = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`
const writerBox = css`
  display: flex;
  margin-top: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
`

const writer = css`
  float: right;
  color: var(--gray-gray-3, #999);
  border: none;
  background: none;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`
const textBox = css`
  padding-top: 10px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  flex-direction: column;
  height: 534px;
  border-bottom: 1px solid var(--gray-gray-3, #999);
  margin-bottom: 20px;
`
const headerText = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`

const writeBox = css`
  display: flex;
  margin-top: 28px;
  gap: 20px;
  align-items: flex-start;
  width: 100%;
`

const writeText = css`
  width: 90%;
  height: 160px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
`

const writeBtn = css`
  width: 130px;
  display: flex;
  justify-content: center;
  padding: 18px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--green-green, #1d482e);
  color: var(--gray-white, #fff);
  /* Title/Title */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`

export default NoticedetailPage
