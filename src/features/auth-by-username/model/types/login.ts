import { AxiosError } from 'axios'

export interface LoginSchema {
  username: string
  password: string
  email: string
  isLoading: boolean
  error: AxiosError | undefined
}
