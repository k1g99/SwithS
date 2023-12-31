/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
// import { Link } from 'react-router-dom'
import Header2 from '../components/Home/Header2'
import Button2 from '../components/Button2'
import Container from '../components/global/Container'
import SelectBox from '../components/SelectBox'
import Calender from '../components/Calender'
import { api } from '../api'
import { useNavigate } from 'react-router'
// import { Link } from 'react-router-dom'

function WritePage() {
  const navigate = useNavigate()
  const [clubName, setClubName] = useState('')
  const [clubDescription, setClubDescription] = useState('')
  const [clubType, setClubType] = useState('스터디') // 스터디 / 프로젝트
  const [clubCategory, setClubCategory] = useState('') // 전공
  const [clubRecruitMember, setClubRecruitMember] = useState('1')
  const [clubRecruitStartDate, setClubRecruitStartDate] = useState('')
  const [clubRecruitEndDate, setClubRecruitEndDate] = useState('')
  const [clubStartDate, setClubStartDate] = useState('')
  const [clubEndDate, setClubEndDate] = useState('')

  const [majorList, setMajorList] = useState([])

  // TPYE Enum
  const CLUB_TYPE = {
    스터디: 'STUDY',
    프로젝트: 'MENTORING',
  }

  // 페이지 로드될 때 전공 불러오기
  useEffect(() => {
    api
      .get('/major')
      .then((res) => {
        setMajorList(res.data.majors)
        setClubCategory(majorList[0].name)
      })
      .catch((err) => {
        console.log(err)
      })

    console.log(majorList)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(e)

    // 변수가 하나라도 비어있으면 alert 후 break
    if (clubName === '') {
      alert('스터디 이름을 입력해주세요')
      return
    } else if (clubDescription === '') {
      alert('스터디 설명을 입력해주세요')
      return
    } else if (clubType === '') {
      alert('모집구분을 선택해주세요')
      return
    } else if (clubCategory === '') {
      alert('전공을 선택해주세요')
      return
    } else if (clubRecruitMember === '') {
      alert('모집인원을 선택해주세요')
      return
    } else if (clubRecruitStartDate === '' || clubRecruitEndDate === '') {
      alert('모집기간을 선택해주세요')
      return
    } else if (clubStartDate === '' || clubEndDate === '') {
      alert('진행기간을 선택해주세요')
      return
    } else {
      api
        .post('/clubs', {
          name: clubName,
          description: clubDescription,
          category: CLUB_TYPE[clubType],
          major: clubCategory,
          leaderId: localStorage.getItem('id'),
          numRecruit: clubRecruitMember,
          registerStartAt: clubRecruitStartDate,
          registerEndAt: clubRecruitEndDate,
          startAt: clubStartDate,
          endAt: clubEndDate,
        })
        .then((response) => {
          if (response.data.success === true) {
            const clubId = response.data.clubId

            api
              .post(
                `/userclub/clubs/${clubId}/user/${localStorage.getItem('id')}`
              )
              .then(() => {
                alert('스터디 생성에 성공했습니다.')
                navigate('/')
              })
              .catch(() => {
                // console.log(err)
              })
          }
        })
        .catch((err) => {
          console.log(err)
          alert('스터디 생성에 실패했습니다. 다시 시도해 주세요')
        })
    }
  }

  return (
    <div>
      <Header2 />
      <Container>
        <div css={writeSection}>
          <div css={writeBox}>
            <div css={writeTitle}>스터디 정보를 입력해주세요</div>
            <form onSubmit={submitHandler} className="uploadForm">
              <div css={inputText}>스터디 이름</div>
              <input
                css={inputStyle}
                onChange={(e) => setClubName(e.target.value)}
              ></input>
              <div css={inputText}>스터디 설명</div>
              <div css={areaBox}>
                <textarea
                  css={areaStyle}
                  onChange={(e) => setClubDescription(e.target.value)}
                ></textarea>
              </div>

              <div css={selectContainer}>
                <div css={selectBox}>
                  <SelectBox
                    text={'모집구분'}
                    options={['스터디', '프로젝트']}
                    onChange={(e) => {
                      setClubType(e.target.value)
                    }}
                  />
                  <SelectBox
                    text={'전공'}
                    options={Object.keys(majorList).map((key) => {
                      return majorList[key].name
                    })}
                    onChange={(e) => {
                      setClubCategory(e.target.value)
                    }}
                  />
                  <Calender
                    text={'진행기간'}
                    setDate={(e) => {
                      setClubStartDate(new Date(e[0]).toISOString())
                      setClubEndDate(new Date(e[1]).toISOString())
                    }}
                  />
                </div>
                <div css={selectBox}>
                  <SelectBox
                    text={'모집인원'}
                    options={['1', '2', '3', '4', '5']}
                    onChange={(e) => {
                      setClubRecruitMember(e.target.value)
                    }}
                  />
                  <Calender
                    text={'모집기간'}
                    setDate={(e) => {
                      setClubRecruitStartDate(new Date(e[0]).toISOString())
                      setClubRecruitEndDate(new Date(e[1]).toISOString())
                    }}
                  />
                </div>
              </div>

              <div css={buttonBox}>
                {/* <Link to="/"> */}
                <Button2 text={'완료'} onClick={submitHandler} />
                {/* </Link> */}
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
  font-family: Pretendard-Regular;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
`

const inputText = css`
  margin-top: 30px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
`

const inputStyle = css`
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
  height: 300px;
  resize: none;
  flex-shrink: 0;
  color: var(--gray-gray-5, #262626);
  /* Body/Body 1 */
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  border: none;
`

const selectContainer = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
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

export default WritePage
