/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import Search from './Search'
import Button1 from '../Button1'
import my from '../../images/my.svg'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import Dropdown from '../Dropdown'

function Header1() {
  const [view, setView] = useState(false)
  const [isLoginStorage, setIsLoginStorage] = useState(
    localStorage.getItem('isLogin')
  )

  useEffect(() => {
    setIsLoginStorage(localStorage.getItem('isLogin'))
    // console.log(isLoginStorage)
  }, [])

  const handleClickView = () => {
    setView(!view)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setView(false)
    }, 200)
  }

  return (
    <header css={headerStyle}>
      <Link to="/">
        <img src={logo} css={logoStyle} />
      </Link>
      <ul css={ulStyle}>
        <li>
          <Search />
        </li>
        {isLoginStorage === 'true' ? (
          <>
            <li>
              <Link to="/write">
                <Button1 text="새 스터디 생성" />
              </Link>
            </li>
            <li>
              <button
                onBlur={handleBlur}
                onClick={handleClickView}
                css={myBtnStyle}
              >
                <img src={my} alt="사람이미지" css={imgStyle} />
                {view && <Dropdown />}
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="login">
              <Button1 text="로그인" />
            </Link>
          </li>
        )}
      </ul>
    </header>
  )
}

const imgStyle = css`
  cursor: pointer;
`

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
  width: 200px;
  margin-top: 5px;
  margin-left: 100px;
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
