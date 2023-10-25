/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header1 from '../components/Home/Header1'
import SectionHot from '../components/Home/SectionHot'
import SectionCat from '../components/Home/SectionCat'

function HomePage() {
  return (
    <div>
      <Header1 />
      <div css={bannerStyle}>
        <div css={imageBox}></div>
      </div>
      <SectionHot />
      <SectionCat />
    </div>
  )
}

const bannerStyle = css`
  margin-top: 40px;
`

const imageBox = css`
  background: var(--gray-gray-1, #f7f7f7);
  width: 1920px;
  height: 478px;
  flex-shrink: 0;
`

export default HomePage
