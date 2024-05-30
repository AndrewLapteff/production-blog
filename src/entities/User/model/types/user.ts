import { FeatureFlags } from 'shared/types/features'

export type Roles = 'USER' | 'ADMIN' | 'MANAGER'

export interface User {
  id: number
  email: string
  username: string
  roles?: Roles
  features?: FeatureFlags
}

export interface UserSchema {
  accessToken: string
  user: User
  _inited?: boolean
}
