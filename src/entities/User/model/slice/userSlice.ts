import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'

const initialState: UserSchema = {
  accessToken: '',
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, payload: PayloadAction<UserSchema>) => {
      state.user = payload.payload.user
      state.accessToken = payload.payload.accessToken
    },
    logout: (state) => {
      state.user = undefined
    }
  }
})

export const { setUser, logout } = userSlice.actions

export const userReducer = userSlice.reducer
