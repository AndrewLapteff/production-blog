import { createAsyncThunk } from '@reduxjs/toolkit'
import { User, UserSchema, setUser } from 'entities/User'
import { LoginSchema } from '../../types/loginSchema'
import axios, { AxiosError } from 'axios'
import { LOCAL_STORAGE_USER_KEY } from 'shared/config'

interface PostDataType extends Pick<LoginSchema, 'email' | 'password'> {}

export const loginByEmailAndPassword = createAsyncThunk<User, PostDataType>( // <return, post data>
  'login/loginByUsername',
  async (credentials, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:4000/login',
        credentials
      )
      if (!data) {
        throw new Error()
      }
      dispatch(setUser(data as UserSchema)) // fix
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(data))
      return data.user
    } catch (error) {
      if (error instanceof AxiosError) return rejectWithValue(error)
      return rejectWithValue(error)
    }
  }
)
