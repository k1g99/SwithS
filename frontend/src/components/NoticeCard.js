/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function NoticeCard(props) {
  return (
    <div css={container}>
      <Link to={`/noticedetail/${props.club_id}/${props.post_id}`}>
        <div css={title}>{props.title}</div>
      </Link>
      <div css={bottomSection}>
        <div css={describe}>{props.describe}</div>
        <div css={detailbox}>
          <div>{props.name}</div>
          <div>{props.date}</div>
        </div>
      </div>
    </div>
  )
}

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  padding-bottom: 8px;
`
const title = css`
  color: var(--gray-gray-5, #262626);
  /* Headline/Headline */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin-bottom: 24px;
`

const bottomSection = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
const describe = css`
  color: var(--gray-gray-5, #262626);
  /* Subheading/Subheading */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`
const detailbox = css`
  float: right;
  color: var(--gray-gray-3, #999);
  text-align: right;
  /* Body/Body 1 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`

export default NoticeCard
