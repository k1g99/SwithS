import { api } from '../../api'
import { getCookie } from '../global/cookie'

export function userLogin() {
  // check cookie
  const accessToken = getCookie('accessToken')

  // check accessToken
  if (accessToken !== undefined) {
    return api
      .get('/user/getUserInfo', {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        localStorage.setItem('id', res.data.id)
        return true
      })
      .catch(() => {
        // console.log(err)
        return false
      })
  } else {
    // Return a Promise that resolves to false when accessToken is undefined
    return Promise.resolve(false)
  }
}
