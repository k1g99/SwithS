/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar2 from '../components/Sidebar2'
import Button3 from '../components/Button3'
import { api } from '../api'
import { Link, useParams } from 'react-router-dom'

function NoticeuploadPage() {
  const params = useParams()
  const clubId = params.study_id
  const [noticeName, setNoticeName] = useState('')
  const [noticeDesc, setNoticeDesc] = useState('')

  const submitHandler = (e) => {
    console.log(e)

    if (noticeName === '') {
      alert('공지명을 입력해주세요')
      return
    } else if (noticeDesc === '') {
      alert('공지 내용을 입력해주세요')
      return
    }

    api
      .post(`/post/${clubId}`, {
        user: localStorage.getItem('id'),
        title: noticeName,
        content: noticeDesc,
        shortContent:
          noticeDesc.length > 10
            ? noticeDesc.substring(0, 10) + '...'
            : noticeDesc,
        vote: null,
      })
      .then((res) => {
        console.log(res)
        alert('공지 등록이 완료되었습니다.')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>새 공지사항 입력</div>
        <div css={uploadSection}>
          <div css={leftSection}>
            <Sidebar2 clubId={clubId} />
          </div>
          <div css={rightSection}>
            <input
              css={uploadText}
              placeholder="공지명을 입력해주세요."
              onChange={(e) => setNoticeName(e.target.value)}
            />
            <textarea
              css={uploadBox}
              onChange={(e) => setNoticeDesc(e.target.value)}
            ></textarea>
            <div css={buttonBox}>
              <Link to={`/studyroom/${clubId}`}>
                <Button3 text={'등록'} onClick={submitHandler} />
              </Link>
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

const uploadSection = css`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 54px;
`
const leftSection = css``

const rightSection = css`
  display: inline-flex;
  flex-direction: column;
  width: 67%;
`
const uploadText = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  border-bottom: 1px solid var(--gray-gray-3, #999);
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
`

const uploadBox = css`
  padding: 16px;
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-3, #999);
  justify-content: center;
  flex-direction: column;
  height: 534px;
`
const buttonBox = css`
  margin-top: 40px;
  margin-left: 92.5%;
`

export default NoticeuploadPage
