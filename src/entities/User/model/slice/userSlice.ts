import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'
import { LOCAL_STORAGE_USER_KEY } from 'shared/config'

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
      state._inited = true
    },
    logout: (state) => {
      state.user = { email: '', id: 0, username: '' }
      state.accessToken = ''
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY)
      state._inited = false
    }
  }
})

export const { setUser, logout } = userSlice.actions

export const userReducer = userSlice.reducer
