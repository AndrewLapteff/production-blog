export interface User {
  id: number
  email: string
  username: string
}

export interface UserSchema {
  accessToken: string
  user: User
  _inited?: boolean
}
