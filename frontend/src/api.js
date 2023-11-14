// 전역 API 설정
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:4000/api',
})
