/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function Sidebar2() {
  return (
    <div css={sidebarStyle}>
      <Link to="/studyroom">
        <button css={menu}>홈 / 공지</button>
      </Link>
      <Link to="/resource">
        <button css={menu}>자료실</button>
      </Link>
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

const menu = css`
  color: var(--gray-gray-5, #262626);
  /* Subheading/Subheading2 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  border: none;
  background: none;
`
export default Sidebar2
