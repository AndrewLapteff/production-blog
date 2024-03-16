import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getInited } from './getInited'
import { getTestStore } from 'shared/lib'

describe('getUser.test.ts', () => {
  it('should return object with proper email value', () => {
    const email = 'test@gmail.com'
    const userReducer = {
      accessToken: '',
      user: { email, id: 1, username: 'Amigo' },
      _inited: true
    }

    const store = getTestStore({ userReducer })

    expect(getInited(store)).toBe(true)
  })

  it('should return object with proper email value', () => {
    const userReducer = {
      accessToken: '',
      user: {
        email: '',
        id: 0,
        username: ''
      },
      _inited: false
    }

    const store = getTestStore({ userReducer })

    expect(getInited(store)).toBe(false)
  })
})
