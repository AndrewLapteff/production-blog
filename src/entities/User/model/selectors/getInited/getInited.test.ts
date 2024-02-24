import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getInited } from './getInited'

describe('getUser.test.ts', () => {
  it('should return object with proper email value', () => {
    const email = 'test@gmail.com'
    const store: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: { email, id: 1, username: 'Amigo' },
        _inited: true
      }
    }
    expect(getInited(store)).toBe(true)
  })

  it('should return object with proper email value', () => {
    const store: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: {
          email: '',
          id: 0,
          username: ''
        },
        _inited: false
      }
    }
    expect(getInited(store)).toBe(false)
  })
})
