import { getProfile } from './getProfile'
import { getTestStore } from 'shared/lib'

describe('getProfile.test.ts', () => {
  it('should return object with proper profile info', () => {
    const profileReducer = {
      profile: {
        id: 1,
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

    const store = getTestStore({ profileReducer })

    expect(getProfile(store)).toEqual(profileReducer.profile)
  })

  it('should return undefined', () => {
    const profileReducer = {
      profile: undefined,
      isLoading: false,
      readonly: true,
      error: undefined
    }

    const store = getTestStore({ profileReducer })

    expect(getProfile(store)).toEqual(undefined)
  })
})
