/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const InputBox2 = ({ placeholder }) => {
  return <input css={inputbox2Style} placeholder={placeholder}></input>
}

InputBox2.propTypes = {
  placeholder: PropTypes.node,
}
const inputbox2Style = css`
  font-family: Pretendard-Regular;
  margin-top: 16px;
  display: flex;
  width: 371px;
  height: 33px;
  padding: 10px 12px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
  color: var(--gray-gray-5, #262626);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`

export default InputBox2
