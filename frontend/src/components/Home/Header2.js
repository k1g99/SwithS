/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

function Header2() {
  return (
    <header css={headerStyle}>
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
  margin-top: 16px;
  margin-left: 100px;
  width: 254px;
  height: 49px;
  flex-shrink: 0;
  background: var(--gray-gray-2, #ccc);
`

export default Header2
