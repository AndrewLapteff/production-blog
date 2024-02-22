import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from '../../types/profile'
import { getProfile } from '../../selectors/get-profile/getProfile'
import { validateProfile } from '../validateProfile/validateProfile'
import { PROFILE_VALIDATION } from '../../types/validation'

function isInstanceOfProfile(obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const postProfile = createAsyncThunk<
Profile,
void,
ThunkConfig<PROFILE_VALIDATION[]>
>('profile/postProfile', async (_, { rejectWithValue, extra, getState }) => {
  const profile = getProfile(getState())

  const errors = validateProfile(profile)

  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const { data } = await extra.api.post('profile', profile)
    if (!isInstanceOfProfile(data)) {
      throw new Error('The returned value is not a profile')
    }
    return data
  } catch (error) {
    console.log(error)
    return rejectWithValue([PROFILE_VALIDATION.SERVER_ERROR])
  }
})
