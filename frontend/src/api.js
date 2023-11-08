// 전역 API 설정
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const api = axios.create({
  baseURL: 'api',
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: {
    host: 'localhost',
    port: 8080,
  },
})
