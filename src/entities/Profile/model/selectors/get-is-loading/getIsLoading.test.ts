import { getIsLoading } from './getIsLoading'
import { getTestStore } from 'shared/lib'

describe('getIsLoading.test.ts', () => {
  it('should return false', () => {
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
      readonly: false,
      error: undefined
    }

    const store = getTestStore({ profileReducer })

    expect(getIsLoading(store)).toEqual(profileReducer.isLoading)
  })

  it('should return true', () => {
    const profileReducer = {
      profile: undefined,
      isLoading: false,
      readonly: true,
      error: undefined
    }

    const store = getTestStore({ profileReducer })

    expect(getIsLoading(store)).toEqual(profileReducer.isLoading)
  })
})
