/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Header2() {
  return (
    <header css={headerStyle}>
      <img src={logo} css={logoStyle} />
      <Link to="/">
        <div css={logoStyle}></div>
      </Link>
    </header>
  )
}

const headerStyle = css`
  display: flex;
  width: 1920px;
  height: 80px;
  flex-shrink: 0;
  border-bottom: 1px solid #ccc;
`

const logoStyle = css`
  margin-top: 5px;
  margin-left: 100px;
  flex-shrink: 0;
`

export default Header2
