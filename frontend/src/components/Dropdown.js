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
  top: 60px;
  right: 0px;
  width: 206px;
  height: 205px;
  flex-shrink: 0;
  background: white;
  border: 1px solid black;
  border-radius: 8px;
  z-index: 100;
  fill: var(--gray-white, #fff);
  stroke-width: 1px;
  stroke: var(--green-green, #1d482e);
`

export default Dropdown
