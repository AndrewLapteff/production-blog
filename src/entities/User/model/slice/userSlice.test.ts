import { UserSchema } from '../types/user'
import { logout, setUser, userReducer } from './userSlice'

describe('userSlice.test.ts', () => {
  it('should change the state to the specified values', () => {
    const state: UserSchema = {
      accessToken: '',
      user: { email: '', id: 1, username: '' }
    }
    const payload: UserSchema = {
      accessToken: 'LDKFJlkjlkjDLKFj',
      user: { email: 'test@gmail.com', id: 1, username: 'Amigo' }
    }
    expect(userReducer(state, setUser(payload))).toEqual(payload)
  })

  it('should remove all values from the state', () => {
    const state: UserSchema = {
      accessToken: 'LDKFJlkjlkjDLKFj',
      user: { email: 'test@gmail.com', id: 1, username: 'Amigo' }
    }
    const result: UserSchema = {
      accessToken: '',
      user: { email: '', id: 0, username: '' }
    }
    expect(userReducer(state, logout())).toEqual(result)
  })
})
