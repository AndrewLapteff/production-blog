import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/login'
import { loginByEmailAndPassword } from '../services/getUserByEmail/getUserByEmail'
import { AxiosError } from 'axios'
import { setUser } from 'entities/User'

const initialState: LoginSchema = {
  email: '',
  isLoading: false,
  password: '',
  username: '',
  error: undefined
}

export const loginSlice = createSlice({
  name: 'login',
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
    builder.addCase(loginByEmailAndPassword.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginByEmailAndPassword.fulfilled, (state, action) => {
      state.isLoading = false
      setUser(action.payload) // same 1
    })
    builder.addCase(loginByEmailAndPassword.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload as AxiosError
    })
  }
})

export const { setEmail, setUsername, setPassword } = loginSlice.actions

export const loginReducer = loginSlice.reducer
