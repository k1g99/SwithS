/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header1 from '../components/Home/Header1'
import SectionHot from '../components/Home/SectionHot'
import SectionCat from '../components/Home/SectionCat'
import banner from '../images/banner.png'

function HomePage() {
  return (
    <div>
      <Header1 />
      <div css={bannerStyle}>
        <img src={banner} css={imageBox}></img>
      </div>
      <SectionHot />
      <SectionCat />
    </div>
  )
}

const bannerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

const imageBox = css`
  display: flex;
  background: var(--gray-gray-1, #f7f7f7);
  height: 478px;
  flex-shrink: 0;
`

export default HomePage
