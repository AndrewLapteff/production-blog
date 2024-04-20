import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Profile } from 'entities/Profile'
import { PROFILE_VALIDATION } from 'entities/Profile/model/types/validation'
import { getProfile } from '../../selectors'
import { validateProfile } from '../validateProfile/validateProfile'

function isInstanceOfProfile(obj: any): obj is Profile {
  return 'username' in obj && 'bio' in obj
}

export const postProfile = createAsyncThunk<
  Profile,
  number,
  ThunkConfig<PROFILE_VALIDATION[]>
>('profile/postProfile', async (id, { rejectWithValue, extra, getState }) => {
  const profile = getProfile(getState())

  const errors = validateProfile(profile)

  if (errors.length) {
    return rejectWithValue(errors)
  }

  try {
    const { data } = await extra.api.patch(`profiles/${id}`, profile)
    if (!isInstanceOfProfile(data)) {
      throw new Error('The returned value is not a profile')
    }
    return data
  } catch (error) {
    console.log(error)
    return rejectWithValue([PROFILE_VALIDATION.SERVER_ERROR])
  }
})
