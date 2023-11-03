/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'
import { Link } from 'react-router-dom'
import InputBox from '../components/InputBox1'
import Container from '../components/global/Container'

function LoginPage() {
  return (
    <div>
      <Header2 />
      <Container>
        <div css={loginTitle}>로그인</div>
        <div css={loginSection}>
          <form css={loginBox}>
            <div>
              <InputBox placeholder={'이메일'} />
              <InputBox placeholder={'비밀번호'} />
            </div>
            <div css={buttonBox}>
              <Button2 text={'로그인'} />
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
  /* Display/Display */
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
  font-variant: all-small-caps;
`
const loginSection = css`
  display: flex;
  justify-content: center;
`
const loginBox = css`
  margin-top: 174px;
`

// const emailInput = css`
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
  font-variant: all-small-caps;
`
export default LoginPage
