import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { updateProfile } from '../service/fetchProfile/fetchProfile'
import { postProfile } from '../service/postProfile/updateProfile'

const initialState: ProfileSchema = {
  profile: undefined,
  backupProfile: undefined,
  isLoading: false,
  error: undefined,
  readonly: true
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Profile>) => {
      state.backupProfile = { ...action.payload }
      state.profile = { ...action.payload }
      state.readonly = true
    },
    setReadonly: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        console.log(state.backupProfile)
        state.readonly = action.payload
        state.profile = state.backupProfile
      }
      state.readonly = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      if (state.profile) state.profile.username = action.payload
    },
    setAge: (state, action: PayloadAction<number>) => {
      if (state.profile) state.profile.age = action.payload
    },
    setCountry: (state, action) => {
      if (state.profile) state.profile.country = action.payload
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      if (state.profile) state.profile.avatar = action.payload
    },
    setBio: (state, action: PayloadAction<string>) => {
      if (state.profile) state.profile.bio = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.backupProfile = action.payload
      state.isLoading = false
      state.error = undefined
    })
    builder.addCase(updateProfile.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    builder.addCase(updateProfile.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(postProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.backupProfile = action.payload
      state.isLoading = false
      state.error = undefined
    })
    builder.addCase(postProfile.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
    builder.addCase(postProfile.pending, (state) => {
      state.isLoading = true
    })
  }
})

export const {
  setProfile,
  setReadonly,
  setUsername,
  setAge,
  setAvatar,
  setBio,
  setCountry
} = profileSlice.actions

export const profileReducer = profileSlice.reducer
