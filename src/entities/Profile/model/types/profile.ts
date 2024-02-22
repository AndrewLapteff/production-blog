import { PROFILE_VALIDATION } from './validation'

export interface Profile {
  username: string
  age: number
  country: string
  avatar: string
  bio: string
}

export interface ProfileSchema {
  profile?: Profile
  backupProfile?: Profile
  isLoading: boolean
  error: unknown
  readonly: boolean
  validationErrors?: PROFILE_VALIDATION[]
}
