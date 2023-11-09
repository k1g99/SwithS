/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'
import Container from '../components/global/Container'
import SelectBox from '../components/SelectBox'
import Calender from '../components/Calender'

function WritePage1() {
  const submitHandler = () => {}

  return (
    <div>
      <Header2 />
      <Container>
        <div css={writeSection}>
          <div css={writeBox}>
            <div css={writeTitle}>스터디 정보를 입력해주세요</div>
            <form onSubmit={submitHandler} className="uploadForm">
              <div css={inputText}>스터디 이름</div>
              <input css={inputStyle}></input>
              <div css={inputText}>스터디 설명</div>
              <div css={areaBox}>
                <textarea css={areaStyle}></textarea>
              </div>

              <div css={selectContainer}>
                <div css={selectBox}>
                  <SelectBox
                    text={'모집구분'}
                    options={['스터디', '프로젝트']}
                  />
                  <SelectBox
                    text={'카테고리'}
                    options={['코딩', '디자인', '미술']}
                  />
                  <Calender text={'진행기간'} />
                </div>
                <div css={selectBox}>
                  <SelectBox
                    text={'모집인원'}
                    options={['1', '2', '3', '4', '5']}
                  />
                  <Calender text={'모집기간'} />
                </div>
              </div>

              <div css={buttonBox}>
                <Link to="/write2">
                  <Button2 text={'완료'} onClick={submitHandler} />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

const writeSection = css`
  margin-top: 60px;
  display: flex;
  width: 100%;
  justify-content: center;
`

const writeBox = css`
  flex-direction: column;
  align-items: center;
`

const writeTitle = css`
  color: var(--gray-gray-5, #262626);
  /* Headline/Headline */
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  font-variant: all-small-caps;
`

const inputText = css`
  margin-top: 30px;
  color: #000;
  /* Subheading/Subheading2 */
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  font-variant: all-small-caps;
`

const inputStyle = css`
  font-size: 18px;
  margin-top: 12px;
  display: flex;
  width: 500px;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
`

const areaBox = css`
  margin-top: 12px;
  display: flex;
  padding: 10px;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-2, #ccc);
`
const areaStyle = css`
  width: 99%;
  height: 22px;
  flex-shrink: 0;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 1 */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  font-variant: all-small-caps;
`

const selectContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  display: flex;
  gap: 120px;
`

const selectBox = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`
const buttonBox = css`
  margin: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default WritePage1
