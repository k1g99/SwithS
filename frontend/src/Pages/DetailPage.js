/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import DetailText from '../components/DetailText'

function DetailPage() {
  return (
    <div>
      <Header2 />
      <Container>
        <div css={datailSection}>
          <div css={titleContainer}>
            <div css={studytitle}>스터디명</div>
            <div css={studyDate}>0000.00.00</div>
          </div>
          <div css={topContainer}>
            <div css={detailBox}>
              <DetailText category={'모집구분'} data={'스터디'} />
              <DetailText category={'모집인원'} data={'스터디'} />
              <DetailText category={'전공'} data={'스터디'} />
            </div>
            <div css={detailBox}>
              <DetailText category={'모집기간'} data={'스터디'} />
              <DetailText category={'모집구분'} data={'스터디'} />
            </div>
          </div>
          <div css={bottomContainer}>
            <div css={infoTitle}>설명</div>
            <div css={infoText}>
              어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const datailSection = css`
  margin-left: 200px;
  width: 80%;
`
const titleContainer = css`
  margin-top: 60px;
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray-gray-3, #e0e0e0);
`
const studytitle = css`
  color: var(--green-green, #1d482e);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`

const studyDate = css`
  margin-top: 10px;
  color: var(--gray-gray-5, #262626);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`

const topContainer = css`
  margin-top: 40px;
  display: flex;
  gap: 160px;
`

const detailBox = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const bottomContainer = css`
  margin-top: 80px;
`

const infoTitle = css`
  color: var(--green-green, #1d482e);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  padding-bottom: 5px;
  border-bottom: 1px solid var(--gray-gray-3, #e0e0e0);
`

const infoText = css`
  margin-top: 30px;
  color: var(--gray-gray-5, #262626);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`

export default DetailPage
