/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function StudyCard(props) {
  return (
    <div css={cardContainer}>
      <div css={topSection}>
        <div css={studyState}>{props.studyState}</div>
      </div>
      <div css={bottomSection}>
        <div css={studyName}>{props.studyName}</div>
        <div css={studyPeriod}>{props.studyPeriod}</div>
      </div>
    </div>
  )
}

const cardContainer = css`
  width: 340px;
  height: 335px;
  border-radius: 30px;
  border: 1px solid var(--gray-gray-2, #ccc);
  background: var(--gray-gray-1, #f7f7f7);
`

const topSection = css`
  width: 340px;
  height: 131px;
  border-radius: 30px 30px 0px 0px;
  background: var(--green-green, #1d482e);
`
const studyName = css`
  color: var(--gray-gray-5, #262626);
  /* Title/Title */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  font-variant: all-small-caps;
`

const studyPeriod = css`
  margin-top: 13px;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 2 */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  font-variant: all-small-caps;
`

const bottomSection = css`
  padding: 21px;
`

const studyState = css`
  margin-top: 82px;
  margin-left: 265px;
  display: inline-flex;
  padding: 0px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  border-radius: 99px;
  background: rgba(255, 255, 255, 0.4);
  color: var(--gray-white, #fff);
  text-align: right;
  /* Caption/Caption */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 18px */
  font-variant: all-small-caps;
`

export default StudyCard
