/** @jsxImportSource @emotion/react */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage1 from './Pages/WritePage1'
import WritePage2 from './Pages/WritePage2'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import MystudyPage from './Pages/MystudyPage'
import SearchPage from './Pages/SearchPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write1" element={<WritePage1 />} />
      <Route path="/write2" element={<WritePage2 />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mystudy" element={<MystudyPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}

export default App
