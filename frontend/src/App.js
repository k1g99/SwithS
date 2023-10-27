/** @jsxImportSource @emotion/react */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage from './Pages/WritePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
