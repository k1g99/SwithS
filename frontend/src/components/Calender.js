/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import 'react-datepicker/dist/react-datepicker.css'

const Calender = ({ text, setDate }) => {
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange

  return (
    <div>
      <div css={pickerText}>{text}</div>
      <DatePicker
        css={pickerStyle}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          setDateRange(update)
          setDate(update)
        }}
        isClearable={true}
      />
    </div>
  )
}

Calender.propTypes = {
  text: PropTypes.node,
}
const pickerStyle = css`
  margin-top: 12px;
  display: flex;
  padding: 8px 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background: var(--gray-gray-1, #f7f7f7);
  border: 1px solid var(--gray-gray-2, #ccc);
  width: 350px;
  height: 19px;
`

const pickerText = css`
  color: #000;
  /* Subheading/Subheading2 */
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  font-variant: all-small-caps;
`
export default Calender
