import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from '../../types/profile'
import { getProfile } from '../../selectors/get-profile/getProfile'

function isInstanceOfProfile(obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const postProfile = createAsyncThunk<Profile, void, ThunkConfig>(
  'profile/postProfile',
  async (_, { rejectWithValue, extra, getState }) => {
    const profile = getProfile(getState())
    if (!profile) return rejectWithValue('The profile is empty')

    try {
      const { data } = await extra.api.post('profile', profile)
      if (!isInstanceOfProfile(data)) {
        throw new Error('The returned value is not a profile')
      }
      return data
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error)
      return rejectWithValue(error)
    }
  }
)
