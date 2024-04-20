import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  Profile,
  ProfileSchema
} from '../../../../entities/Profile/model/types/profile'
import { fetchProfile } from '../service/fetchProfile/fetchProfile'
import { postProfile } from '../service/postProfile/updateProfile'

const initialState: ProfileSchema = {
  profile: undefined,
  backupProfile: undefined,
  isLoading: false,
  error: undefined,
  readonly: true,
  validationErrors: undefined
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
      state.profile = state.backupProfile
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
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.backupProfile = action.payload
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
    builder.addCase(postProfile.fulfilled, (state, action) => {
      state.profile = action.payload
      state.backupProfile = action.payload
      state.isLoading = false
      state.validationErrors = undefined
    })
    builder.addCase(postProfile.rejected, (state, action) => {
      state.isLoading = false
      state.validationErrors = action.payload
    })
    builder.addCase(postProfile.pending, (state) => {
      state.isLoading = true
      state.validationErrors = undefined
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
