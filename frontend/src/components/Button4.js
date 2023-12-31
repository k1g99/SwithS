/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const Button4 = ({ id, text }) => {
  const navigate = useNavigate()

  const clickCategoryBtn = (e) => {
    redirectToCategoryPage(e.target.id)
  }

  const redirectToCategoryPage = (targetCat) => {
    navigate('/category', {
      state: { targetWord: '', targetMajor: targetCat },
    })
  }

  return (
    <button id={id} css={button4Style} onClick={clickCategoryBtn}>
      {'# ' + text}
    </button>
  )
}

Button4.propTypes = {
  text: PropTypes.node,
}

const button4Style = css`
  font-family: Pretendard-Regular;
  width: autopx;
  padding: 0 20px;
  height: 38px;
  border-radius: 15px;
  border: none;
  background: #356b37c4;
  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  cursor: pointer;
`

export default Button4
