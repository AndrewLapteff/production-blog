import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from '../../types/profile'

function isInstanceOfProfile(obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const fetchProfile = createAsyncThunk<
  Profile,
  number,
  ThunkConfig<unknown>
>('profile/fetchProfile', async (id, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get(`profiles?userId=${id}`)
    const profile = data[0]
    if (!isInstanceOfProfile(profile)) {
      throw new Error()
    }
    return profile
  } catch (error) {
    return rejectWithValue(error)
  }
})
