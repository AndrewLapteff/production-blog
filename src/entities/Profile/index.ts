export type { Profile, ProfileSchema } from './model/types/profile'
export { profileSlice, profileReducer } from './model/slice/profileSlice'
export { updateProfile as fetchProfile } from './model/service/fetchProfile/fetchProfile'
