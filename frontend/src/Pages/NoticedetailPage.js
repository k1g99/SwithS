/** @jsxImportSource @emotion/react */
import React from 'react'
import { useState } from 'react'
import Header2 from '../components/Home/Header2'
import Sidebar2 from '../components/Sidebar2'
import Container from '../components/global/Container'
import { css } from '@emotion/react'
// import Comment from '../components/Comment'
import { api } from '../api'
import { useParams } from 'react-router-dom'
import Vote from '../components/Vote'
import VoteResult from '../components/VoteResult'
function NoticedetailPage() {
  const params = useParams()
  const clubId = params.study_id
  const postId = params.post_id

  const [data, setData] = useState([])
  const [isVoting, setIsVoting] = useState(false)
  const [tryVoting, setTryVoting] = useState(false)

  React.useEffect(() => {
    api
      .get(`/post/detail/${postId}`)
      .then((res) => {
        setData(res.data.post)
        if (res.data.post.vote !== null) {
          setIsVoting(true)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>게시글</div>
        <div css={roomSection}>
          <div css={leftSection}>
            <Sidebar2 clubId={clubId} />
          </div>
          <div css={rightSection}>
            <div css={title}>{data.title}</div>
            <div css={writerBox}>
              <div css={writer}>{data.username}</div>
            </div>
            <div css={textBox}>
              <div css={headerText}>{data.content}</div>
              {isVoting ? (
                tryVoting ? (
                  <Vote voteId={data.vote.id} clubId={clubId} postId={postId} />
                ) : (
                  <div css={voteBox}>
                    <VoteResult voteId={data.vote.id} clubId={clubId} />
                    <button css={buttonk} onClick={() => setTryVoting(true)}>
                      투표하기
                    </button>
                  </div>
                )
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const studyName = css`
  margin-top: 60px;
  margin-left: 200px;
  color: var(--green-green, #1d482e);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 72px */
`
const roomSection = css`
  display: flex;
  margin-top: 40px;
  margin-bottom: 60px;
  justify-content: center;
  gap: 54px;
`
const leftSection = css``

const rightSection = css`
  display: inline-flex;
  flex-direction: column;
  width: 67%;
`
const title = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`
const writerBox = css`
  display: flex;
  margin-top: 8px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  border-top: none;
  border-left: none;
  border-right: none;
  background: none;
  padding-bottom: 10px;
`

const writer = css`
  float: right;
  color: var(--gray-gray-3, #999);
  border: none;
  background: none;
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`
const textBox = css`
  padding-top: 10px;
  margin-top: 16px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  flex-direction: column;
  padding-bottom: 10px;
`
const headerText = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
`

const buttonk = css`
  margin-top: 10px;
  font-family: Pretendard-Regular;
  display: flex;
  width: 150px;
  height: 50px;
  padding: 4px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--green-green, #1d482e);
  color: var(--gray-white, #fff);
  cursor: pointer;
  /* Headline/Headline */
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`
const voteBox = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
// const writeText = css`
//   width: 90%;
//   height: 160px;
//   padding: 10px;
//   border-radius: 8px;
//   border: 1px solid var(--gray-gray-2, #ccc);
// `

// const writeBtn = css`
//   width: 130px;
//   display: flex;
//   justify-content: center;
//   padding: 18px;
//   align-items: center;
//   align-self: stretch;
//   border-radius: 8px;
//   background: var(--green-green, #1d482e);
//   color: var(--gray-white, #fff);
//   /* Title/Title */
//   font-family: Pretendard;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: 150%; /* 30px */
// `

export default NoticedetailPage
