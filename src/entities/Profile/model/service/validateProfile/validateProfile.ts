import { Profile } from '../../types/profile'
import { PROFILE_VALIDATION } from '../../types/validation'

export const validateProfile = (profile?: Profile): PROFILE_VALIDATION[] => {
  if (!profile) return [PROFILE_VALIDATION.NO_DATA]

  const errors: PROFILE_VALIDATION[] = []

  if (profile.username.length < 5) {
    errors.push(PROFILE_VALIDATION.TOO_SHORT_USERNAME)
  } else if (!profile.username) {
    errors.push(PROFILE_VALIDATION.NO_USERNAME)
  }
  if (!profile.age) {
    errors.push(PROFILE_VALIDATION.NO_AGE)
  }
  if (profile.age > 150) {
    errors.push(PROFILE_VALIDATION.TOO_BIG_AGE)
  }
  if (profile.bio.length > 50) errors.push(PROFILE_VALIDATION.TOO_LONG_BIO)
  if (!profile.avatar) errors.push(PROFILE_VALIDATION.NO_AVATAR)
  if (!profile.country) errors.push(PROFILE_VALIDATION.NO_COUNTRY)

  return errors
}
