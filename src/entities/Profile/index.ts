export type { Profile, ProfileSchema } from './model/types/profile'
export { profileSlice, profileReducer } from './model/slice/profileSlice'
export { fetchProfile } from './model/service/fetchProfile/fetchProfile'
export {
  getError,
  getIsLoading,
  getIsReadonly,
  getProfile,
  getValidationErrors
} from './model/selectors/index'
export {
  setAge,
  setBio,
  setCountry,
  setReadonly,
  setUsername
} from './model/slice/profileSlice'
