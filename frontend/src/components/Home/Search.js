/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import search from '../../images/search.svg'

function Search() {
  return (
    <div css={searchStyle}>
      <div css={searchBox}>검색어를 입력하세요</div>
      <img src={search} alt="검색이미지" />
    </div>
  )
}

const searchStyle = css`
  display: flex;
  width: 411px;
  height: 38px;
  padding: 4px 36px;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  border-radius: 99px;
  background: var(--gray-gray-1, #f7f7f7);
`

const searchBox = css`
  width: 303px;
  flex-shrink: 0;
  color: var(--gray-gray-3, #999);
  /* Title/Title */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  font-variant: all-small-caps;
`

export default Search
