/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const Button3 = ({ text, onClick }) => {
  return (
    <button css={button3Style} onClick={onClick}>
      {text}
    </button>
  )
}

Button3.propTypes = {
  text: PropTypes.node,
}

const button3Style = css`
  font-family: Pretendard;
  margin-top: 16px;
  margin-left: 8px;
  display: flex;
  width: 104px;
  height: 55px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--green-green, #1d482e);
  color: var(--gray-white, #fff);
  /* Headline/Headline */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`

export default Button3
