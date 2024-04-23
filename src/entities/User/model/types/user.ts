export type Roles = 'USER' | 'ADMIN' | 'MANAGER'

export interface User {
  id: number
  email: string
  username: string
  roles?: Roles
}

export interface UserSchema {
  accessToken: string
  user: User
  _inited?: boolean
}
