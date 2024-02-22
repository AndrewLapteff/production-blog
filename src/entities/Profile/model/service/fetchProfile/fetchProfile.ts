import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from '../../types/profile'

function isInstanceOfProfile(obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const fetchProfile = createAsyncThunk<
Profile,
string,
ThunkConfig<unknown>
>('profile/fetchProfile', async (username, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get('profile', { data: username })
    if (!isInstanceOfProfile(data)) {
      throw new Error()
    }
    return data
  } catch (error) {
    return rejectWithValue(error)
  }
})
