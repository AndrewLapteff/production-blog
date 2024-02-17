import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'

const initialState: ProfileSchema = {
  profile: undefined,
  isLoading: false,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.profile = action.payload
    }
  }
})

export const { setProfile } = profileSlice.actions

export const profileReducer = profileSlice.reducer
