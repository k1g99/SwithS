/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

const SelectBox = ({ text, name, options, onChange }) => {
  return (
    <div>
      <div css={selectText}>{text}</div>
      <select name={name} css={boxStyle} onChange={onChange}>
        {options &&
          options.map((options) => (
            <option key={options} value={options}>
              {options}
            </option>
          ))}
      </select>
    </div>
  )
}

SelectBox.propTypes = {
  text: PropTypes.node,
  name: PropTypes.string,
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
  value4: PropTypes.string,
}

const selectText = css`
  font-family: Pretendard;
  color: #000;
  /* Subheading/Subheading2 */
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`
const boxStyle = css`
  font-family: Pretendard;
  margin-top: 12px;
  display: flex;
  width: 371px;
  height: 40px;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--gray-gray-1, #f7f7f7);
  border: 1px solid var(--gray-gray-2, #ccc);
`
export default SelectBox
