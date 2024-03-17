import axios from 'axios'
import { getLocalStorage } from 'shared/lib/getLocalStorage/getLocalStorage'

export const token = getLocalStorage('userInfo', 'accessToken')

export const $api = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${token}`
  }
})
