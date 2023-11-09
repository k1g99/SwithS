/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import search from '../../images/search.svg'
// import { api } from '../../api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [clubSearchWord, setClubSearchWord] = useState('')
  const navigate = useNavigate()

  const listenEnter = (e) => {
    if (e.key === 'Enter') {
      redirectToSearchPage(clubSearchWord)
    }
  }

  const clickSearchBtn = () => {
    redirectToSearchPage(clubSearchWord)
  }

  const redirectToSearchPage = (targetWord) => {
    navigate('/search', {
      state: { targetWord: targetWord },
    })
  }

  return (
    <div css={searchStyle}>
      <input
        type="text"
        css={searchBox}
        placeholder="검색어를 입력하세요"
        onKeyDown={(e) => listenEnter(e)}
        onChange={(e) => setClubSearchWord(e.target.value)}
      />
      <button css={searchBtnStyle} onClick={clickSearchBtn}>
        <img src={search} alt="검색이미지" />
      </button>
    </div>
  )
}

const searchStyle = css`
  display: flex;
  min-width: 200px;
  width: auto;
  height: 38px;
  padding: 4px 36px;
  align-items: center;
  gap: 40px;
  flex-shrink: 0;
  border-radius: 99px;
  background: var(--gray-gray-1, #f7f7f7);
`

const searchBox = css`
  width: auto;
  flex-shrink: 0;
  font-weight: 500;
  border: none;
  background: none;
`
const searchBtnStyle = css`
  border: none;
  background: none;
`

export default Search
