import { PROFILE_VALIDATION } from './validation'

export interface Profile {
  id: number
  username: string
  age: number
  country: string
  avatar: string
  bio: string
  userId?: number
}

export interface ProfileSchema {
  profile?: Profile
  backupProfile?: Profile
  isLoading: boolean
  error: unknown
  readonly: boolean
  validationErrors?: PROFILE_VALIDATION[]
}
