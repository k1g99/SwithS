/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header from './components/Header'
import banner from './images/banner.jpg'

function App() {
  return (
    <div>
      <Header />
      <div css={bannerStyle}>
        <img src={banner} alt="banner"></img>
      </div>
    </div>
  )
}

const bannerStyle = css`
  padding-top: 120px;
  width: 1920px;
  height: 478px;
`

export default App
