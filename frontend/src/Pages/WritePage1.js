/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'

function WritePage1() {
  return (
    <div>
      <Header2 />
      <div css={writeSection}>
        <form css={writeBox}>
          <div css={writeTitle}>스터디 정보를 입력해주세요</div>
          <div>
            <div css={inputText}>스터디 이름</div>
            <input css={inputStyle}></input>
          </div>
          <div css={detailSection}>
            <div css={inputText}>스터디 설명</div>
            <div css={areaBox}>
              <textarea css={areaStyle}></textarea>
            </div>
          </div>
          <div css={buttonBox}>
            <Link to="/write2">
              <Button2 text={'다음'} />
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

const writeSection = css`
  margin-top: 60px;
  display: flex;
  justify-content: center;
`

const writeBox = css`
  flex-direction: column;
  align-items: center;
`

const writeTitle = css`
  color: var(--gray-gray-5, #262626);
  /* Headline/Headline */
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  font-variant: all-small-caps;
`

const inputText = css`
  margin-top: 40px;
  color: #000;
  /* Subheading/Subheading2 */
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  font-variant: all-small-caps;
`

const inputStyle = css`
  font-size: 18px;
  margin-top: 12px;
  display: flex;
  width: 864px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
`

const detailSection = css`
  margin-top: 28px;
`
const areaBox = css`
  margin-top: 12px;
  display: flex;
  width: 1278px;
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
`
const areaStyle = css`
  width: 1270px;
  height: 200px;
  flex-shrink: 0;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 1 */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  font-variant: all-small-caps;
`

const buttonBox = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default WritePage1
