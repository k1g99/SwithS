/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Button() {
  return <button css={buttonStyle}>새글쓰기</button>
}

const buttonStyle = css`
  display: inline-flex;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1.5px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
`

export default Button
