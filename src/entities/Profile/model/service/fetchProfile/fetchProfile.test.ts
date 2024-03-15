// /* eslint-disable @typescript-eslint/unbound-method */
// import axios from 'axios'
// import { fetchProfile } from './fetchProfile'
// import { Dispatch, PayloadAction } from '@reduxjs/toolkit'
// import { StoreProps } from 'app/providers/store-provider/types/Schema'
// import { NavigateFunction } from 'react-router-dom'
// import { Profile } from '../../types/profile'

// jest.mock('axios')

// describe('getUserByEmail.test.ts', () => {
//   let dispatch: Dispatch
//   let getState: () => StoreProps
//   let navigate: NavigateFunction
//   beforeEach(() => {
//     dispatch = jest.fn()
//     getState = jest.fn()
//     navigate = jest.fn()
//   })

//   it('should ', async () => {
//     const username = 'Amigo'
//     const returnedData = {
//       username,
//       avatar: 'https://avatars.githubusercontent.com/u/114949478?v=4',
//       country: 'USA',
//       age: 18,
//       bio: "Hello world, that's it!"
//     }

//     // @ts-expect-error
//     const mockedAxios = axios.get.mockReturnValue(
//       Promise.resolve({ data: returnedData })
//     )

//     // createAsyncThunk call
//     const action = fetchProfile(username)
//     // action generation call
//     const actionData = await action(dispatch, getState, {
//       api: mockedAxios,
//       navigate
//     })
//     console.log(actionData.payload)
//     expect(dispatch).toHaveBeenCalledTimes(2) // loginByEmailAndPassword, setUser, returned one
//     expect(actionData.payload.username).toEqual(username)
//     expect(axios.post).toHaveBeenCalled()
//     expect(actionData.meta.requestStatus).toBe('fulfilled')
//   })
// })
