/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar1 from '../components/Sidebar1'
import upload from '../images/upload.svg'
import TextInput from '../components/TextInput'

function UploadPage() {
  const imageInput = useRef()

  const onClickImageUpload = () => {
    imageInput.current.click()
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
            <div css={uploadText}>사진을 업로드하세요.</div>
            <input type="file" style={{ display: 'none' }} ref={imageInput} />
            <button onClick={onClickImageUpload} css={uploadButton}>
              <img src={upload} css={img} />
            </button>

            <div css={fixSection}>
              <button css={fixText}>삭제</button>
              <button css={fixText}>수정</button>
            </div>
            <div css={uploadBox}>
              <div css={headerText}>분류</div>
              <TextInput init={'수정가능텍스트박스'} />
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
  position: relative;
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
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`

const uploadButton = css`
  margin-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
`
const img = css`
  float: right;
`

const fixSection = css`
  margin-top: 8px;
`
const fixText = css`
  float: right;
  color: var(--gray-gray-3, #999);
  border: none;
  background: none;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`
const uploadBox = css`
  padding: 16px;
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-3, #999);
  justify-content: center;
  flex-direction: column;
`

const headerText = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`
export default UploadPage
