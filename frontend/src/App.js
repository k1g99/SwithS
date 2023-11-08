/** @jsxImportSource @emotion/react */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage1 from './Pages/WritePage1'
import WritePage2 from './Pages/WritePage2'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  useEffect(() => {
    // API 엔드포인트 URL
    const apiUrl = 'api/'

    // Axios 테스트
    axios
      .get(apiUrl)
      .then((response) => {
        // 요청 성공
        console.log(response.data)
      })
      .catch((error) => {
        // 요청 실패
        console.error('API 요청 오류:', error)
      })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write1" element={<WritePage1 />} />
      <Route path="/write2" element={<WritePage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
