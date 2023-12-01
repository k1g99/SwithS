/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react'
import { css } from '@emotion/react'
import Button4 from '../Button4'
import { api } from '../../api'

function SectionCat() {
  const [majorList, setMajorList] = useState([])

  useEffect(() => {
    api
      .get('/major')
      .then((res) => {
        setMajorList(res.data.majors)
        console.log(majorList)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <section css={catstyle}>
      <div css={catTitle}>카테고리별 스터디 / 프로젝트 바로가기</div>
      <div css={catSection}>
        {majorList.map((item) => (
          <Button4 key={item.id} text={item.name} />
        ))}
        {/* <Button4 text={'소프트웨어'} />
        <Button4 text={'수학'} />
        <Button4 text={'영어영문'} />
        <Button4 text={'미술'} />
        <Button4 text={'교양'} />
        <Button4 text={'취업'} /> */}
      </div>
    </section>
  )
}

const catstyle = css`
  width: 80%;
  margin: 40px 7% 150px;
`

const catTitle = css`
  color: var(--gray-gray-5, #262626);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`
const catSection = css`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 24px;
`
export default SectionCat
