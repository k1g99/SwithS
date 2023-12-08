/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'
import { Link, useNavigate } from 'react-router-dom'
import InputBox from '../components/InputBox1'
import Container from '../components/global/Container'
import { api } from '../api'
import { setCookie } from '../components/global/cookie'

function LoginPage() {
  const navigate = useNavigate()

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = {
      username: username,
      password: password,
    }

    api
      .post('/user/signin', data)
      .then((res) => {
        // console.log(res)
        alert('로그인 성공')
        setCookie('accessToken', res.data.accessToken)
        setCookie('refreshToken', res.data.refreshToken)
        localStorage.setItem('isLogin', true)
        // localStorage.setItem('id', res.data.id)
        // redirect to main page
        navigate('/')
      })
      .catch(() => {
        // console.log(err)
        alert('로그인 실패')
      })
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={loginTitle}>로그인</div>
        <div css={loginSection}>
          <form css={loginBox}>
            <div>
              <InputBox
                placeholder={'username'}
                onChange={handleUsernameChange}
              />
              <InputBox
                placeholder={'password'}
                type={'password'}
                onChange={handlePasswordChange}
              />
            </div>
            <div css={buttonBox}>
              <Button2 text={'로그인'} onClick={handleSubmit} />
              <Link to="/register">
                <div css={registerText}>회원가입</div>
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

const loginTitle = css`
  margin-top: 60px;
  margin-left: 200px;
  color: var(--green-green, #1d482e);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`
const loginSection = css`
  display: flex;
  justify-content: center;
`
const loginBox = css`
  margin-top: 174px;
`

// const usernameInput = css`
//   margin-bottom: 16px;
//   display: flex;
//   width: 600px;
//   padding: 10px 12px;
//   align-items: center;
//   gap: 10px;
//   border-radius: 8px;
//   border: 1px solid var(--gray-gray-2, #ccc);
// `
// const pwdInput = css`
//   display: flex;
//   width: 600px;
//   padding: 10px 12px;
//   align-items: center;
//   gap: 10px;
//   border-radius: 8px;
//   border: 1px solid var(--gray-gray-2, #ccc);
// `

const buttonBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: 60px;
`

const registerText = css`
  margin-top: 16px;
  color: var(--gray-gray-3, #999);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`
export default LoginPage
