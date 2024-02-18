import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from '../types/profile'

function isInstanceOfProfile (obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig>(
  'profile/getProfile',
  async (username, { rejectWithValue, extra }) => {
    try {
      const { data } = await extra.api.get('profile', { data: username })
      if (!isInstanceOfProfile(data)) {
        throw new Error()
      }
      return data
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error)
      return rejectWithValue(error)
    }
  }
)
