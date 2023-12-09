/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header1 from '../components/Home/Header1'
import SectionHot from '../components/Home/SectionHot'
import SectionCat from '../components/Home/SectionCat'
import Container from '../components/global/Container'
import banner from '../images/banner.png'
import { api } from '../api'
import { Link } from 'react-router-dom'

function HomePage() {
  const [cardList, setCardList] = useState([])

  React.useEffect(() => {
    api
      .get('/clubs')
      .then((res) => {
        setCardList(res.data.clubs)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const displayData = cardList.slice(0, 4).map((item, index) => {
    return (
      <Link key={index} to={`/studydetail/${item.id}`}>
        <SectionHot
          key={index}
          title={item.name}
          describe={item.description}
          date={item.endAt}
        />
      </Link>
    )
  })

  return (
    <div>
      <Header1 />
      <Container>
        <div css={bannerStyle}>
          <img src={banner} css={imageBox}></img>
        </div>
        <div css={hotStyle}>
          <div css={hotTitle}>최신 스터디</div>
          <div css={displayBox}>{displayData}</div>
        </div>
        <SectionCat />
      </Container>
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

const hotStyle = css`
  width: 80%;
  margin: 20px 7%;
`

const hotTitle = css`
  color: var(--green-green, #1d482e);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`

const displayBox = css`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export default HomePage
