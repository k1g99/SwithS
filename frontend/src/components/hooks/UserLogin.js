import { api } from '../../api'
import { getCookie } from '../global/cookie'

export function userLogin() {
  // check cookie
  const accessToken = getCookie('accessToken')

  // check accessToken
  if (accessToken !== undefined) {
    return api
      .post(
        '/user/test',
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        if (res.data === 'anonymousUser님 환영합니다.') {
          console.log('토큰 오류')
          return false
        }
        return true
      })
      .catch((err) => {
        console.log(err)
        return false
      })
  } else {
    // Return a Promise that resolves to false when accessToken is undefined
    return Promise.resolve(false)
  }
}
