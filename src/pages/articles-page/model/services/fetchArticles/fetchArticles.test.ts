// import { fetchArticles } from './fetchArticles'

// describe('fetchArticles.teset.ts', () => {
//   it('should ', async () => {
//     const mock = [{ test: 'f' }]

//     const dispatch = jest.fn()
//     const thunk = fetchArticles(1)

//     await thunk(dispatch, () => {}, {})
//     console.log(dispatch.mock.calls)
//   })
// })
/* eslint-disable @typescript-eslint/unbound-method */

import axios from 'axios'
import { fetchArticles } from './fetchArticles'
import { Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { StoreProps } from '../../../../../app/providers/store-provider/types/Schema'
import { NavigateFunction } from 'react-router-dom'

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

  it('should ', async () => {
    const username = 'Amigo'
    const returnedData = {
      id: 1,
      title:
        'New JavaScript Features from ECMAScript 2023 (ES14). New way to organize',
      description:
        'Welcome to the cutting-edge world of ECMAScript 2023 (ES14), where JavaScript undergoes a transformational evolution in code organization. In this latest iteration, developers are empowered with innovative tools and methodologies to streamline their coding practices and enhance project maintainability.',
      img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*2RMPMcSvZBIVyPiiw3kUPw.jpeg',
      view: '1024',
      createdAt: '01.01.2024',
      topics: ['JavaScript', 'Features'],
      minsToRead: '2',
      profileId: 1,
      blocks: [],
      profile: {}
    }

    // @ts-expect-error
    const mockedAxios = axios.get.mockReturnValue(
      Promise.resolve({ data: returnedData })
    )

    // createAsyncThunk call
    const action = fetchArticles({})
    // action generation call
    const actionData = await action(dispatch, getState, {
      api: mockedAxios,
      navigate
    })
    console.log(actionData.payload)
    // expect(dispatch).toHaveBeenCalledTimes(2) // loginByEmailAndPassword, setUser, returned one
    // expect(axios.get).toHaveBeenCalled()
    // expect(actionData.meta.requestStatus).toBe('fulfilled')
  })
})
