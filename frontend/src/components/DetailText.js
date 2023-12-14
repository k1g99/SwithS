/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const DetailText = ({ category, text }) => {
  return (
    <div css={textBox}>
      <div css={catStyle}>{category}</div>
      <div css={dataStyle}>{text}</div>
    </div>
  )
}

DetailText.propTypes = {
  category: PropTypes.node,
  text: PropTypes.node,
}
const textBox = css`
  display: flex;
  gap: 40px;
`
const catStyle = css`
  color: var(--green-green, #1d482e);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`

const dataStyle = css`
  color: var(--gray-gray-5, #262626);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`

export default DetailText
