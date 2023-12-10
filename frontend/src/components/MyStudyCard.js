/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function MyStudyCard(props) {
  return (
    <div css={cardContainer}>
      <div css={topSection}></div>
      <div css={bottomSection}>
        <div css={studyName}>{props.studyName}</div>
      </div>
    </div>
  )
}

const cardContainer = css`
  font-family: Pretendard-Regular;
  width: 350px;
  height: 335px;
  border-radius: 30px;
  border: 1px solid var(--gray-gray-2, #ccc);
  background: var(--gray-gray-1, #f7f7f7);
`

const topSection = css`
  width: 350px;
  height: 190px;
  border-radius: 30px 30px 0px 0px;
  background: var(--green-green, #1d482e);
`
const studyName = css`
  color: var(--gray-gray-5, #262626);
  /* Title/Title */
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`

const bottomSection = css`
  padding: 21px;
`

export default MyStudyCard
