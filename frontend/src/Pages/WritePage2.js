/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'

function WritePage2() {
  return (
    <div>
      <Header2 />
      <div css={writeSection}>
        <form css={writeBox}>
          <div css={writeTitle}>나머지 정보를 입력해주세요</div>
          <div css={buttonBox}>
            <Link to="/">
              <Button2 text={'완료'} />
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

const buttonBox = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default WritePage2
