/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'

function SectionHot() {
  return (
    <section css={hotStyle}>
      <div css={hotTitle}>이번주 인기글</div>
      <div css={hotBox}>
        <div css={hotContent1}>
          <div css={contentTitle}>카테고리</div>
          <div css={contentDead}>마감일 | 어쩌구저쩌구</div>
        </div>
        <div css={hotContent2}>
          <div css={contentInfo}>
            솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라솰라
          </div>
        </div>
      </div>
    </section>
  )
}

const hotStyle = css`
  width: 80%;
  margin: 20px 7%;
`

const hotTitle = css`
  margin: 0 0 24px;
  color: var(--green-green, #1d482e);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`

const hotBox = css`
  padding: 29px 22px;
  width: 415px;
  height: 191px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 3px solid var(--gray-gray-2, #ccc);
  background: var(--gray-white, #fff);
`

const hotContent1 = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`
const contentTitle = css`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 99px;
  background: var(--gray-gray-1, #f7f7f7);
  color: var(--gray-gray-5, #262626);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`
const contentDead = css`
  color: var(--gray-gray-3, #999);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`
const hotContent2 = css`
  margin-top: 8px;
`
const contentInfo = css`
  color: var(--gray-gray-5, #262626);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`

export default SectionHot
