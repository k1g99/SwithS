/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import InputBox1 from '../components/InputBox1'
import InputBox2 from '../components/InputBox2'
import Button2 from '../components/Button2'
import Button3 from '../components/Button3'

function RegisterPage() {
  return (
    <div>
      <Header2 />
      <div css={registerTitle}>회원가입</div>
      <div css={registerSection}>
        <form css={registerBox}>
          <InputBox1 placeholder={'이름'} />
          <div css={buttonInput}>
            <InputBox2 placeholder={'이메일'} />
            <Button3 text={'보내기'} />
          </div>
          <div css={buttonInput}>
            <InputBox2 placeholder={'인증번호'} />
            <Button3 text={'확인'} />
          </div>
          <InputBox1 placeholder={'비밀번호'} />

          <div css={buttonBox}>
            <Button2 text={'회원가입'} />
          </div>
        </form>
      </div>
    </div>
  )
}

const registerTitle = css`
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

const registerSection = css`
  display: flex;
  justify-content: center;
`

const registerBox = css`
  margin-top: 115px;
`

const buttonBox = css`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  height: 88px;
`

const buttonInput = css`
  display: flex;
`
export default RegisterPage
