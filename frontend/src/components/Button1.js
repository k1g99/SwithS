/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Button1() {
  return <button css={button1Style}>새글쓰기</button>
}

const button1Style = css`
  display: flex;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1.5px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
`

export default Button1
