/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Sidebar2() {
  return (
    <div css={sidebarStyle}>
      <div>홈/공지</div>
      <div>스터디 계획표</div>
      <div>자료실</div>
      <div>게시판</div>
    </div>
  )
}

const sidebarStyle = css`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 185px;
  height: 100%;
  border-right: 2px solid var(--gray-gray-2, #ccc);
  color: var(--gray-gray-5, #262626);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`
export default Sidebar2
