import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/consts/localStorage/index'

const initialState: UserSchema = {
  accessToken: '',
  user: { email: '', id: 0, username: '' },

  _inited: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, payload: PayloadAction<UserSchema>) => {
      state.user = payload.payload.user
      state.accessToken = payload.payload.accessToken
    },
    init: (state) => {
      state._inited = true
      const data = localStorage.getItem(LOCAL_STORAGE_USER_KEY)
      if (!data) {
        return
      }
      const parsedData = JSON.parse(data) as UserSchema
      state.user = parsedData.user
    },
    logout: (state) => {
      state.user = { email: '', id: 0, username: '' }
      state.accessToken = ''
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
    }
  }
})

export const { setUser, logout, init } = userSlice.actions

export const userReducer = userSlice.reducer
