/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Search from './Search'
import Button from './Button'
import my from '../images/my.svg'

function Header() {
  return (
    <header css={headerStyle}>
      <div css={logoStyle}>로고</div>
      <ul css={ulStyle}>
        <li>
          <Search />
        </li>
        <li>
          <Button />
        </li>
        <li>
          <button css={myBtnStyle}>
            <img src={my} alt="사람이미지" />
          </button>
        </li>
      </ul>
    </header>
  )
}

const headerStyle = css`
  display: flex;
  position: fixed;
  width: 1920px;
  height: 80px;
  flex-shrink: 0;
  border-bottom: 1px solid #ccc;
`

const logoStyle = css``

const ulStyle = css`
  margin-left: 600px;
  display: flex;
  list-style: none;
  align-items: center;
  gap: 65px;
`

const myBtnStyle = css`
  display: flex;
  width: 38px;
  height: 38px;
  padding: 4px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 999px;
  background: var(--green-green, #1d482e);
`
export default Header
