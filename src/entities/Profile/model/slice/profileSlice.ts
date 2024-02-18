import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/profile'
import { fetchProfile } from '../service/getProifle'

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.isLoading = false
      state.error = undefined
    })
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    builder.addCase(fetchProfile.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const { setProfile } = profileSlice.actions

export const profileReducer = profileSlice.reducer
