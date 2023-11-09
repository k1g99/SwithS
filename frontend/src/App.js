/** @jsxImportSource @emotion/react */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage from './Pages/WritePage'
// import WritePage2 from './Pages/WritePage2'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { useEffect } from 'react'
import { api } from './api'
import MystudyPage from './Pages/MystudyPage'
import SearchPage from './Pages/SearchPage'

function App() {
  useEffect(() => {
    // Axios 테스트
    api
      .get('/')
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
      {/* <Route path="/write2" element={<WritePage2 />} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mystudy" element={<MystudyPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}

export default App
