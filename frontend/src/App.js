/** @jsxImportSource @emotion/react */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage from './Pages/WritePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
import { useEffect } from 'react'
import { api } from './api'
import MystudyPage from './Pages/MystudyPage'
import SearchPage from './Pages/SearchPage'
import MyPage from './Pages/MyPage'
import ScheduleuploadPage from './Pages/ScheduleuploadPage'
import StudydetailPage from './Pages/StudydetailPage'
import CategoryPage from './Pages/CategoryPage'
import StudyroomPage from './Pages/StudyroomPage'
import NoticedetailPage from './Pages/NoticedetailPage'
import ResourcePage from './Pages/ResourcePage'
import ResourcedetailPage from './Pages/ResourcedetailPage'
import ResourceuploadPage from './Pages/ResourceuploadPage'

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
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/mystudy" element={<MystudyPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/scheduleupload" element={<ScheduleuploadPage />} />
      <Route path="/studydetail/:item_id" element={<StudydetailPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/studyroom" element={<StudyroomPage />} />
      <Route path="/noticedetail" element={<NoticedetailPage />} />
      <Route path="/resource" element={<ResourcePage />} />
      <Route path="/resourcedetail" element={<ResourcedetailPage />} />
      <Route path="/resourceupload" element={<ResourceuploadPage />} />
    </Routes>
  )
}

export default App
