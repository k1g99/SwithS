/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Search from './Search'
import Button1 from '../Button1'
import my from '../../images/my.svg'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header1() {
  return (
    <header css={headerStyle}>
      <img src={logo} css={logoStyle} />
      <ul css={ulStyle}>
        <li>
          <Search />
        </li>
        <li>
          <Link to="/write">
            <Button1 />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <button css={myBtnStyle}>
              <img src={my} alt="사람이미지" />
            </button>
          </Link>
        </li>
      </ul>
    </header>
  )
}

const headerStyle = css`
  display: flex;
  position: fixed;
  top: 0px;
  background: white;
  width: 100%;
  min-width: 1000px;
  height: 80px;
  flex-shrink: 0;
  position: sticky;
  border-bottom: 1px solid #ccc;
`

const logoStyle = css`
  margin-top: 5px;
  margin-left: 5%;
  flex-shrink: 0;
`

const ulStyle = css`
  display: flex;
  list-style: none;
  align-items: center;
  margin-left: auto;
  margin-right: 5%;
  gap: 20px;
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
export default Header1
