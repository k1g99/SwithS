/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function Button1({ text }) {
  return <button css={button1Style}>{text}</button>
}

const button1Style = css`
  font-family: Pretendard-Regular;
  display: flex;
  min-width: 105px;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  border: 1.5px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
`

export default Button1
