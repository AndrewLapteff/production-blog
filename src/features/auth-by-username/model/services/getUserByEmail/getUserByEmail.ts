import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserSchema, setUser } from 'entities/User'
import { LoginSchema } from '../../types/login'
import { AxiosError } from 'axios'
import { LOCAL_STORAGE_USER_KEY } from 'shared/config'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'

interface PostDataType extends Pick<LoginSchema, 'email' | 'password'> {}

export const loginByEmailAndPassword = createAsyncThunk<
UserSchema, // same 1
PostDataType,
ThunkConfig
>( // <return, post data>
  'login/loginByUsername',
  async (credentials, { rejectWithValue, dispatch, extra }) => {
    try {
      const { data } = await extra.api.post('login', credentials)
      if (!data) {
        throw new Error()
      }
      dispatch(setUser(data as UserSchema)) // fix
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data))
      return data
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error)
      return rejectWithValue(error)
    }
  }
)
