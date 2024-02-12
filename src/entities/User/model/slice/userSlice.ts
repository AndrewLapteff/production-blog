import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserSchema } from '../types/user'

const initialState: UserSchema = {
  user: { id: 0, username: 'Jonh Doe' }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
    incrementByAmount: (state, action: PayloadAction<number>) => {}
  }
})

export const { increment, decrement, incrementByAmount } = userSlice.actions

export const userReducer = userSlice.reducer
