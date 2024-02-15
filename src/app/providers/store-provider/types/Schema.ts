import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/auth-by-username'

export interface StoreProps {
  loginReducer: LoginSchema
  userReducer: UserSchema
}
