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
  const [isVerified, setIsVerified] = useState(false)
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userVerify, setUserVerify] = useState('')

  const handleChangeName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setUserEmail(e.target.value)
    // console.log(userEmail)
  }

  const handleChangePassword = (e) => {
    setUserPassword(e.target.value)
  }

  const handleVerifyChange = (e) => {
    setUserVerify(e.target.value)
  }

  const emailSend = (e) => {
    e.preventDefault()
    // console.log(userEmail)

    const domain = userEmail.substring(userEmail.indexOf('@') + 1)

    if (domain === 'skku.edu' || domain === 'g.skku.edu') {
      api
        .post('/user/auth/email', {
          email: userEmail,
        })
        .then(() => {
          alert('이메일 전송을 완료했습니다. 메일함을 확인해주세요.')
        })
        .catch(() => {
          // console.log(err)
          alert('메일 전송을 실패했습니다.')
        })
    } else {
      alert('성균관대학교 이메일을 입력해주세요.')
    }
  }

  const verifyEmail = (e) => {
    e.preventDefault()
    api
      .get('/user/auth/verify', {
        params: {
          code: userVerify,
          email: userEmail,
        },
      })
      .then(() => {
        alert('인증에 성공했습니다.')
        setIsVerified(true)
      })
      .catch(() => {
        // console.log(err)
        alert('인증 코드가 일치하지 않습니다.')
      })
  }

  const registerNewUser = (e) => {
    e.preventDefault()
    if (isVerified) {
      api
        .post('/user', {
          username: userName,
          email: userEmail,
          password: userPassword,
        })
        .then(() => {
          alert('회원가입에 성공했습니다.')
          window.location.href = '/'
        })
        .catch(() => {
          //   console.log(err)
          alert('회원가입에 실패했습니다. 다시 시도해주세요!')
        })
    } else {
      alert('이메일 인증을 먼저 해주세요.')
    }
  }

  return (
    <div>
      <Header2 />
      <div css={registerTitle}>회원가입</div>
      <div css={registerSection}>
        <form css={registerBox}>
          <InputBox1 placeholder={'이름'} onChange={handleChangeName} />
          <div css={buttonInput}>
            <InputBox2 placeholder={'이메일'} onChange={handleChangeEmail} />
            <Button3 text={'보내기'} onClick={emailSend} />
          </div>
          <div css={buttonInput}>
            <InputBox2 placeholder={'인증번호'} onChange={handleVerifyChange} />
            <Button3 text={'확인'} onClick={verifyEmail} />
          </div>
          <InputBox1 placeholder={'비밀번호'} onChange={handleChangePassword} />

          <div css={buttonBox}>
            <Button2 text={'회원가입'} onClick={registerNewUser} />
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
