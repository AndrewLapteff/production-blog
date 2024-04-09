import axios from 'axios'
import { getLocalStorage } from 'shared/lib/getLocalStorage/getLocalStorage'

export const $api = axios.create({
  baseURL: API_URL
})

if ($api) {
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${getLocalStorage(
      'userInfo',
      'accessToken'
    )}`

    return config
  })
}
