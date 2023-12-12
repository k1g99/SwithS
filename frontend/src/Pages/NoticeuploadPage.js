/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import { css } from '@emotion/react'
import Header2 from '../components/Home/Header2'
import Container from '../components/global/Container'
import Sidebar2 from '../components/Sidebar2'
import Button3 from '../components/Button3'
import Calender from '../components/Calender'
import { api } from '../api'
import { Link, useParams } from 'react-router-dom'

function NoticeuploadPage() {
  const params = useParams()
  const clubId = params.study_id
  const [clubRecruitStartDate, setClubRecruitStartDate] = useState(new Date())
  const [clubRecruitEndDate, setClubRecruitEndDate] = useState(new Date())
  const [noticeName, setNoticeName] = useState('')
  const [noticeDesc, setNoticeDesc] = useState('')
  const [isVoting, setIsVoting] = useState(false)

  const handleVoteClick = () => {
    // 투표 버튼을 눌렀을 때 실행되는 로직
    setIsVoting(true)
  }
  const submitHandler = async () => {
    if (noticeName === '') {
      alert('공지명을 입력해주세요')
      return
    } else if (noticeDesc === '') {
      alert('공지 내용을 입력해주세요')
      return
    }
    const startDate = new Date(clubRecruitStartDate)
    const endDate = new Date(clubRecruitEndDate)
    startDate.setDate(startDate.getDate() + 1)
    endDate.setDate(endDate.getDate() + 1)
    if (isVoting) {
      const voteData = {
        title: '투표',
        startAt: startDate.toISOString(),
        endAt: endDate.toISOString(),
      }

      api.post('http://localhost:8080/api/vote', voteData).then((voteRes) => {
        console.log('투표가 등록되었습니다.', voteRes.data.voteID)
        api
          .post(`/post/${clubId}`, {
            user: localStorage.getItem('id'),
            title: noticeName,
            content: noticeDesc,
            shortContent:
              noticeDesc.length > 10
                ? noticeDesc.substring(0, 10) + '...'
                : noticeDesc,
            vote: voteRes.data.voteID,
          })
          .then((res) => {
            console.log(res)
            alert('공지 등록이 완료되었습니다.')
          })
          .catch((err) => {
            console.log(err)
          })
      })
    } else {
      api
        .post(`/post/${clubId}`, {
          user: localStorage.getItem('id'),
          title: noticeName,
          content: noticeDesc,
          shortContent:
            noticeDesc.length > 10
              ? noticeDesc.substring(0, 10) + '...'
              : noticeDesc,
          vote: null,
        })
        .then(() => {
          alert('공지 등록이 완료되었습니다.')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={studyName}>새 공지사항 입력</div>
        <div css={uploadSection}>
          <div css={leftSection}>
            <Sidebar2 clubId={clubId} />
          </div>
          <div css={rightSection}>
            <input
              css={uploadText}
              placeholder="공지명을 입력해주세요."
              onChange={(e) => setNoticeName(e.target.value)}
            />
            <textarea
              css={uploadBox}
              onChange={(e) => setNoticeDesc(e.target.value)}
            ></textarea>
            <div css={isVoting ? buttonBoxContainer1 : buttonBoxContainer2}>
              {isVoting ? (
                <Calender
                  text={'투표기간'}
                  setDate={(e) => {
                    setClubRecruitStartDate(new Date(e[0]).toISOString())
                    setClubRecruitEndDate(new Date(e[1]).toISOString())
                  }}
                />
              ) : (
                <div css={buttonBox}>
                  <Button3 text={'투표'} onClick={handleVoteClick} />
                </div>
              )}
              <div css={buttonBox}>
                <Link to={`/studyroom/${clubId}`}>
                  <Button3 text={'등록'} onClick={submitHandler} />
                </Link>
              </div>
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

const uploadSection = css`
  display: flex;
  margin-top: 40px;
  justify-content: center;
  gap: 54px;
`
const leftSection = css``

const rightSection = css`
  display: inline-flex;
  flex-direction: column;
  width: 67%;
`
const uploadText = css`
  color: var(--gray-gray-5, #262626);
  font-family: Pretendard-Regular;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  border-bottom: 1px solid var(--gray-gray-3, #999);
  border-top: none;
  border-left: none;
  border-right: none;
  padding-bottom: 10px;
`

const uploadBox = css`
  padding: 16px;
  margin-top: 24px;
  display: flex;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--gray-gray-3, #999);
  justify-content: center;
  flex-direction: column;
  height: 534px;
`
const buttonBox = css`
  margin-top: 10px;
`

const buttonBoxContainer1 = css`
  display: flex;
  justify-content: right;
`

const buttonBoxContainer2 = css`
  display: flex;
  justify-content: right;
`

export default NoticeuploadPage
