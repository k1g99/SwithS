// 전역 API 설정
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:8080/api',
})
