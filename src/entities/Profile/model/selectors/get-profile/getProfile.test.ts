import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getProfile } from './getProfile'

describe('getProfile.test.ts', () => {
  it('should return object with proper profile info', () => {
    const profileReducer = {
      profile: {
        age: 18,
        avatar: '',
        bio: 'Hey',
        country: 'Ukraine',
        username: 'Amigo'
      },
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
    expect(getProfile(store)).toEqual(profileReducer.profile)
  })

  it('should return undefined', () => {
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
    expect(getProfile(store)).toEqual(undefined)
  })
})
