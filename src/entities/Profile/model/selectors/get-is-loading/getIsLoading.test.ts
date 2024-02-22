import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getIsLoading } from './getIsLoading'

describe('getIsLoading.test.ts', () => {
  it('should return false', () => {
    const profileReducer = {
      profile: {
        age: 18,
        avatar: '',
        bio: 'Hey',
        country: 'Ukraine',
        username: 'Amigo'
      },
      isLoading: false,
      readonly: false,
      error: undefined
    }
    const store: Pick<StoreProps, 'profileReducer' | 'userReducer'> = {
      userReducer: {
        user: {
          id: 1,
          username: '',
          email: ''
        },
        accessToken: ''
      },
      profileReducer
    }
    expect(getIsLoading(store)).toEqual(profileReducer.isLoading)
  })

  it('should return true', () => {
    const profileReducer = {
      profile: undefined,
      isLoading: false,
      readonly: true,
      error: undefined
    }
    const store: Pick<StoreProps, 'profileReducer' | 'userReducer'> = {
      userReducer: {
        user: {
          id: 1,
          username: '',
          email: ''
        },
        accessToken: ''
      },
      profileReducer
    }
    expect(getIsLoading(store)).toEqual(profileReducer.isLoading)
  })
})
