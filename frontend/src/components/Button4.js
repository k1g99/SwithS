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
      {text}
    </button>
  )
}

Button4.propTypes = {
  text: PropTypes.node,
}

const button4Style = css`
  font-family: Pretendard-Regular;
  width: 107px;
  height: 38px;
  border-radius: 999px;
  border: 1.5px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
  color: var(--gray-gray-5, #262626);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
`

export default Button4
