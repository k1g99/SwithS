/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <ul css={dropdownStyle}>
      <li>
        <Link to="/mystudy">My 스터디룸</Link>
      </li>
      <li>My Page</li>
      <li>시간표 업로드</li>
    </ul>
  )
}

const dropdownStyle = css`
  position: absolute;
  top: 72px;
  right: 72px;
`

export default Dropdown
