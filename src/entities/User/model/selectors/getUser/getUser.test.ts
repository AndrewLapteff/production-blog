import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getUser } from './getUser'

describe('getUser.test.ts', () => {
  it('should return object with proper email value', () => {
    const email = 'test@gmail.com'
    const store: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: { email, id: 1, username: 'Amigo' }
      }
    }
    expect(getUser(store).email).toBe(email)
  })

  it('should return object with proper email value', () => {
    const store: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: {
          email: '',
          id: 0,
          username: ''
        }
      }
    }
    expect(getUser(store).email).toBe('')
  })
})
