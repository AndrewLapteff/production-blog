/* eslint-disable @typescript-eslint/unbound-method */
import axios from 'axios'
import { loginByEmailAndPassword } from './getUserByEmail'
import { Dispatch } from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { NavigateFunction } from 'react-router-dom'
import { UserSchema, setUser } from 'entities/User'
jest.mock('axios')

describe('getUserByEmail.test.ts', () => {
  let dispatch: Dispatch
  let getState: () => StoreProps
  let navigate: NavigateFunction
  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
    navigate = jest.fn()
  })

  // it('should ', async () => {
  //   const username = 'Amigo'
  //   const returnedData: UserSchema = {
  //     accessToken: 'test',
  //     user: { email: 'test@gmail.com', id: 1, username }
  //   }

  //   // @ts-expect-error
  //   const mockedAxios = axios.post.mockReturnValue(
  //     Promise.resolve({ data: returnedData })
  //   )

  //   // createAsyncThunk call
  //   const action = loginByEmailAndPassword({
  //     email: returnedData.user.email,
  //     password: ''
  //   })
  //   // action generation call
  //   const actionData = await action(dispatch, getState, {
  //     api: mockedAxios,
  //     navigate
  //   })

  //   expect(dispatch).toHaveBeenCalledTimes(3) // loginByEmailAndPassword, setUser, returned one
  //   expect(dispatch).toHaveBeenCalledWith(setUser(returnedData))
  //   expect(axios.post).toHaveBeenCalled()
  //   expect(actionData.meta.requestStatus).toBe('fulfilled')
  // })

  it('should be rejected', async () => {
    // @ts-expect-error
    axios.post.mockReturnValue(Promise.resolve({ status: 404 }))
    // createAsyncThunk call
    const action = loginByEmailAndPassword({
      email: 'test@gmail.com',
      password: ''
    })
    // action generation call
    const actionInfo = await action(dispatch, getState, {
      api: axios,
      navigate
    })

    expect(dispatch).toHaveBeenCalledTimes(2) // loginByEmailAndPassword, rejectWithValue
    expect(axios.post).toHaveBeenCalled()
    expect(actionInfo.meta.requestStatus).toBe('rejected')
  })
})
