/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const Button2 = ({ text }) => {
  return <button css={button2Style}>{text}</button>
}

Button2.propTypes = {
  text: PropTypes.node,
}

const button2Style = css`
  display: flex;
  width: 300px;
  height: 50px;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--green-green, #1d482e);
  color: var(--gray-white, #fff);
  /* Headline/Headline */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  font-variant: all-small-caps;
`

export default Button2
