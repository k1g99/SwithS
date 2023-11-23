/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import InputBox1 from '../components/InputBox1'
import InputBox2 from '../components/InputBox2'
import Button2 from '../components/Button2'
import Button3 from '../components/Button3'
import { api } from '../api'

function RegisterPage() {
  const [useremail, setUseremail] = useState('')

  const handleChange = (e) => {
    setUseremail(e.target.value)
  }
  const emailSend = (e) => {
    e.preventDefault()
    api
      .post('/user/auth/email', {
        email: useremail,
      })
      .then(() => {
        alert('이메일 전송에 완료했습니다.')
      })
      .catch((err) => {
        console.log(err)
        alert('실패했습니다.')
      })
  }

  return (
    <div>
      <Header2 />
      <div css={registerTitle}>회원가입</div>
      <div css={registerSection}>
        <form css={registerBox}>
          <InputBox1 placeholder={'이름'} />
          <div css={buttonInput}>
            <InputBox2 placeholder={'이메일'} onChange={handleChange} />
            <Button3 text={'보내기'} onClick={emailSend} />
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
