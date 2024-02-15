import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByEmailAndPassword } from '../services/getUserByEmail/getUserByEmail'
import { AxiosError } from 'axios'

const initialState: LoginSchema = {
  email: '',
  isLoading: false,
  password: '',
  username: '',
  error: undefined
}

export const loginSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginByEmailAndPassword.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(loginByEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(loginByEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as AxiosError
    })
  }
})

export const { setEmail, setUsername, setPassword } = loginSlice.actions

export const loginReducer = loginSlice.reducer
