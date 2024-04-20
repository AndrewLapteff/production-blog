import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getLocalStorage } from 'shared/lib/getLocalStorage/getLocalStorage'

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: (headers) => {
      const token = getLocalStorage('userInfo', 'accessToken')
      if (token) {
        headers.set('Authorization', token)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({})
})
