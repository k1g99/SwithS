/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function Dropdown() {
  return (
    <div css={dropdownStyle}>
      <div css={dropdownContainer}>
        <div css={dropdownTop}>
          <Link to="/studyroom">My 스터디룸</Link>
          <div css={stroke1} />
        </div>
        <div css={dropdownBottom}>
          <Link to="/mypage">My Page</Link>
          <Link to="/upload">시간표 업로드</Link>
        </div>
      </div>
      <div css={logout}>
        <div css={logoutText}>로그아웃</div>
      </div>
    </div>
  )
}

const dropdownStyle = css`
  font-family: Pretendard-Regular;
  position: absolute;
  top: 72px;
  right: 72px;
  fill: var(--gray-white, #fff);
  border-radius: 15px;
  border: 1px solid var(--green-green, #1d482e);
  width: 230px;
  height: 205px;
  flex-shrink: 0;
`

const dropdownContainer = css`
  height: 60%;
  padding: 15px;
`

const dropdownTop = css`
  text-align: left;
`

const stroke1 = css`
  margin-top: 15px;
  border-bottom: 1px solid var(--green-green, #1d482e);
`
const dropdownBottom = css`
  text-align: left;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const logout = css`
  text-align: right;
  border-top: 1px solid var(--green-green, #1d482e);
  padding: 15px;
`

const logoutText = css`
  color: var(--gray-gray-3, #999);
  /* Caption/Caption */
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
`

export default Dropdown
