/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import WritePage from './Pages/WritePage'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'
// import { useEffect } from 'react'
// import { api } from './api'
import SearchPage from './Pages/SearchPage'
import ScheduleuploadPage from './Pages/ScheduleuploadPage'
import StudydetailPage from './Pages/StudydetailPage'
import CategoryPage from './Pages/CategoryPage'
import StudyroomPage from './Pages/StudyroomPage'
import NoticedetailPage from './Pages/NoticedetailPage'
import ResourcePage from './Pages/ResourcePage'
import ResourcedetailPage from './Pages/ResourcedetailPage'
import ResourceuploadPage from './Pages/ResourceuploadPage'
import NoticeuploadPage from './Pages/NoticeuploadPage'
import { userLogin } from './components/hooks/UserLogin'
import UserStudyPage from './Pages/UserStudyPage'

function App() {
  // 로그인 상태 LocalStorage에 저장
  //   useEffect(() => {
  //     if (userLogin()) {
  //       localStorage.setItem('isLogin', true)
  //     } else {
  //       localStorage.setItem('isLogin', false)
  //     }
  //   }, [])

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isLoggedIn = await userLogin()
        localStorage.setItem('isLogin', isLoggedIn)
        if (isLoggedIn) {
          //   console.log('User is logged in')
        } else {
          //   console.log('User is not logged in')
          localStorage.removeItem('id')
        }
      } catch (error) {
        console.error('Error checking login status:', error)
        localStorage.setItem('isLogin', false)
      }
    }

    checkLogin()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/scheduleupload" element={<ScheduleuploadPage />} />
      <Route path="/studydetail/:item_id" element={<StudydetailPage />} />
      <Route path="/category" element={<CategoryPage />} />
      <Route path="/studyroom" element={<StudyroomPage />} />
      <Route path="/mystudy" element={<UserStudyPage />} />
      <Route path="/noticedetail" element={<NoticedetailPage />} />
      <Route path="/resource" element={<ResourcePage />} />
      <Route path="/resourcedetail" element={<ResourcedetailPage />} />
      <Route path="/resourceupload" element={<ResourceuploadPage />} />
      <Route path="/noticeupload" element={<NoticeuploadPage />} />
    </Routes>
  )
}

export default App
