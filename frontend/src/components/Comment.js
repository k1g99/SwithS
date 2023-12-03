/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Comment() {
  return (
    <div css={commentContainer}>
      <div css={leftSection}>
        <div css={top}>
          <div css={name}>신경준</div>
          <div css={time}>2023.12.03</div>
        </div>
        <div css={content}>네 알았습니다. 네 알았습니다. 네 알았습니다. </div>
      </div>
      <div css={rightSection}>
        <button css={fixtext}>수정</button>
        <button css={fixtext}>삭제</button>
      </div>
    </div>
  )
}
const commentContainer = css`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  padding-bottom: 24px;
`

const leftSection = css``

const top = css`
  display: flex;
  flex-direction: row;
  gap: 24px;
`
const name = css`
  color: var(--gray-gray-5, #262626);
  /* Subheading/Subheading2 */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`

const time = css`
  color: var(--gray-gray-5, #262626);
  /* Body/Body 1 */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-top: 3px;
`
const rightSection = css`
  display: flex;
  flex-direction: row;
`
const fixtext = css`
  color: var(--gray-gray-3, #999);
  border: none;
  background: none;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`

const content = css`
  margin-top: 12px;
  color: var(--gray-gray-5, #262626);
  /* Subheading/Subheading */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`

export default Comment
