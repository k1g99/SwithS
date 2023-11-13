/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function SectionCat() {
  return (
    <section css={catstyle}>
      <div css={catTitle}>카테고리별 스터디 / 프로젝트 바로가기</div>
    </section>
  )
}

const catstyle = css`
  width: 80%;
  margin: 20px 7%;
`

const catTitle = css`
  color: var(--gray-gray-5, #262626);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`

export default SectionCat
