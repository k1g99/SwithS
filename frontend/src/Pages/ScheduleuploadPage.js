/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar1 from '../components/Sidebar1'
import Button3 from '../components/Button3'
import { api } from '../api'

function UploadPage() {
  const [timetableUrl, settimetableUrl] = useState('')
  const userId = localStorage.getItem('id')

  const onClickTimetableUrl = () => {
    console.log(timetableUrl)
    api
      .post(
        `/timetable/${userId}/everytime`,
        {},
        {
          params: {
            url: timetableUrl,
          },
        }
      )
      .then((res) => {
        console.log(res.data)
        alert('업로드 성공')
        window.location.href = '/'
      })
      .catch((err) => {
        console.log(err)
        alert('업로드 실패')
      })
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={uploadTitle}>시간표 업로드</div>
        <div css={uploadSection}>
          <div css={leftSection}>
            <Sidebar1 />
          </div>
          <div css={rightSection}>
            <div css={uploadText}>에브리타임 URL을 입력하세요.</div>
            <input
              css={urlInput}
              onChange={(e) => settimetableUrl(e.target.value)}
            />
            <div css={buttonBox}>
              <Button3 text={'등록'} onClick={onClickTimetableUrl} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const uploadTitle = css`
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
`

const buttonBox = css`
  margin-top: 40px;
  margin-left: 92.5%;
`

const urlInput = css`
  margin-top: 24px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 30px;
`

export default UploadPage
