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
        <div css={studyName}>
          {props.studyName}
          <div css={studyCategory}>{props.studyCategory}</div>
        </div>
        <div css={studyPeriod}>{'진행 기간 :  ' + props.studyPeriod}</div>
        <div css={studyDescription}> {props.studyDescription}</div>
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
  height: 130px;
  border-radius: 30px 30px 0px 0px;
  background: var(--green-green, #1d482e);
`
const studyName = css`
  color: var(--gray-gray-5, #262626);
  /* Title/Title */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`

const studyCategory = css`
  display: inline;
  padding-left: 20px;
  color: var(--gray-gray-5, #262626);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`

const studyPeriod = css`
  margin-top: 13px;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 2 */
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`

const bottomSection = css`
  padding: 21px;
`

const studyState = css`
  margin-top: 85px;
  margin-left: 258px;
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
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 18px */
`

const studyDescription = css`
  margin-top: 13px;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  padding-top: 20px;
`

export default StudyCard
