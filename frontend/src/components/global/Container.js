/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import PropTypes from 'prop-types'

function Container({ children }) {
  return (
    <div css={containerStyle}>
      <div // navbar 간격 제거
        css={css`
          height: 80px;
          width: 100%;
        `}
      ></div>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 800px;
  min-height: 100vh;
  margin: -80px 0;
`

export default Container
