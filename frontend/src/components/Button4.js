/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Button4 = ({ text }) => {
  const [clubCategoryWord, setClubCategoryWord] = useState('')
  const navigate = useNavigate()

  const clickCategoryBtn = () => {
    redirectToCategoryPage(clubCategoryWord)
  }

  const redirectToCategoryPage = (targetCat) => {
    navigate('/category', {
      state: { targetCat: targetCat },
    })
  }

  return (
    <button
      css={button4Style}
      onClick={clickCategoryBtn}
      onChange={(e) => setClubCategoryWord(e.target.value)}
    >
      {text}
    </button>
  )
}

Button4.propTypes = {
  text: PropTypes.node,
}

const button4Style = css`
  font-family: Pretendard;
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
