/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar2 from '../components/Sidebar2'
import upload from '../images/upload.svg'
import Button3 from '../components/Button3'
import { api } from '../api'

function ResourceuploadPage() {
  const fileInput = useRef(null)

  const onClickFileUpload = () => {
    fileInput.current.click()
  }
  const [file, setFile] = useState(null)

  const onClickFileSubmit = () => {
    const formData = new FormData()
    formData.append('file', fileInput.current.files[0])

    api.post('/file/upload', formData).then((res) => {
      if (res.status === 200) {
        alert('업로드 성공')
      } else {
        alert('업로드 실패')
      }
    }, [])
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>스터디명</div>
        <div css={uploadSection}>
          <div css={leftSection}>
            <Sidebar2 />
          </div>
          <div css={rightSection}>
            <div css={uploadBox}>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInput}
                onChange={(e) => setFile(e.target.value)}
              />
              <button onClick={onClickFileUpload} css={uploadButton}>
                <img src={upload} css={img} />
              </button>
              <div css={filetitle}>{file}</div>
            </div>
            <div css={buttonBox}>
              <Button3 text={'등록'} onClick={onClickFileSubmit} />
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

const uploadBox = css`
  display: flex;
  flex-direction: row-reverse;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  gap: 50px;
  padding-right: 20px;
  padding-bottom: 10px;
`

const uploadButton = css`
  border: none;
  background: none;
`
const img = css``
const filetitle = css`
  margin: 0px;
`

const buttonBox = css`
  margin-top: 40px;
  margin-left: 92.5%;
`

export default ResourceuploadPage
