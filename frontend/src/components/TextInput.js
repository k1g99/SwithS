/** @jsxImportSource @emotion/react */
import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'

const TextInput = ({ init }) => {
  const ref = useRef(null)

  const [text, setText] = useState(init)
  const [editable, setEditable] = useState(false)

  const editOn = () => {
    setEditable(true)
  }

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEditable(!editable)
    }
  }

  // const handleClickOutside = (e) => {
  //   if (editable == true && !ref.current.contains(e.target)) {
  //     setEditable(false)
  //   }
  // }

  // useEffect(() => {
  //   window.addEventListener('click', handleClickOutside, true) // 이벤트 등록
  // })

  return (
    <>
      <div ref={ref}>
        {editable ? (
          <input
            css={inputStyle}
            type="text"
            value={text}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div css={{ inputStyle }} onClick={editOn()}>
            {text}
          </div>
        )}
      </div>
    </>
  )
}

TextInput.propTypes = {
  init: PropTypes.string,
}

const inputStyle = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  border: none;
`
export default TextInput
