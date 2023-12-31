/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function Sidebar1() {
  return (
    <div css={sidebarStyle}>
      <Link to="/mystudy">
        <div>나의 스터디</div>
      </Link>
    </div>
  )
}

const sidebarStyle = css`
  width: 185px;
  height: 100%;
  border-right: 2px solid var(--gray-gray-2, #ccc);
  color: var(--gray-gray-5, #262626);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`
export default Sidebar1
