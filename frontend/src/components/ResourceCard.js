/** @jsxImportSource @emotion/react */
import React from 'react'
import { css } from '@emotion/react'
import { api } from '../api'

function ResourceCard(props) {
  const handleResourceClick = (clickedResource) => {
    console.log('Clicked resource:', clickedResource)
    // 클릭한 리소스에 대한 작업 수행

    api
      .get('/file/download', {
        params: {
          fileName: clickedResource,
        },
        responseType: 'blob',
      })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', clickedResource)
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div css={container}>
      <div css={title} onClick={() => handleResourceClick(props.resourceTitle)}>
        {props.resourceTitle}
      </div>
    </div>
  )
}

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  border-bottom: 1px solid var(--gray-gray-2, #ccc);
  padding-bottom: 8px;
`
const title = css`
  color: var(--gray-gray-5, #262626);
  /* Headline/Headline */
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 36px */
  margin-bottom: 24px;
`

export default ResourceCard
