import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { ProfileSchema } from '../../types/profile'
import { PROFILE_VALIDATION } from '../../types/validation'
import { getValidationErrors } from './getValidationErrors'

describe('getValidationErrors.test.ts', () => {
  it('should return array with two errors', () => {
    const profileReducer: ProfileSchema = {
      profile: {
        age: 18,
        avatar: '',
        bio: 'Hey',
        country: 'Ukraine',
        username: 'Amigo'
      },
      isLoading: false,
      readonly: true,
      error: undefined,
      validationErrors: [PROFILE_VALIDATION.NO_DATA, PROFILE_VALIDATION.NO_AGE]
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
    expect(getValidationErrors(store)).toEqual(profileReducer.validationErrors)
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
    expect(getValidationErrors(store)).toEqual(undefined)
  })
})
