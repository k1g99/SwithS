/** @jsxImportSource @emotion/react */
import React from 'react'
import Header1 from '../components/Home/Header1'
import StudyCard from '../components/StudyCard'
import Container from '../components/global/Container'
import { css } from '@emotion/react'

function SearchPage() {
  return (
    <div>
      <Header1 />
      <Container>
        <div css={searchTitle}>0000검색</div>
        <div css={cardContainer}>
          <div css={cardSection}>
            <StudyCard />
            <StudyCard />
            <StudyCard />
            <StudyCard />
            <StudyCard />
            <StudyCard />
          </div>
        </div>
      </Container>
    </div>
  )
}

const searchTitle = css`
  margin-top: 60px;
  margin-left: 200px;
  color: var(--green-green, #1d482e);
  /* Display/Display */
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
  font-variant: all-small-caps;
`

const cardSection = css`
  width: 80%;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
`
const cardContainer = css`
  justify-content: center;
  display: flex;
`
export default SearchPage
