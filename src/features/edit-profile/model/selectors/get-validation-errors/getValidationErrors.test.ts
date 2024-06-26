import { ProfileSchema } from 'entities/Profile'
import { getValidationErrors } from './getValidationErrors'
import { getTestStore } from 'shared/lib'
import { PROFILE_VALIDATION } from 'entities/Profile/model/types/validation'

describe('getValidationErrors.test.ts', () => {
  it('should return array with two errors', () => {
    const profileReducer: ProfileSchema = {
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
      error: undefined,
      validationErrors: [PROFILE_VALIDATION.NO_DATA, PROFILE_VALIDATION.NO_AGE]
    }

    const store = getTestStore({ profileReducer })

    expect(getValidationErrors(store)).toEqual(profileReducer.validationErrors)
  })

  it('should return undefined', () => {
    const profileReducer = {
      profile: undefined,
      isLoading: false,
      readonly: true,
      error: undefined
    }

    const store = getTestStore({ profileReducer })

    expect(getValidationErrors(store)).toEqual(undefined)
  })
})
