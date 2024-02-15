export interface User {
  email: string
  id: number
  username: string
}

export interface UserSchema {
  accessToken: string
  user: User
}
