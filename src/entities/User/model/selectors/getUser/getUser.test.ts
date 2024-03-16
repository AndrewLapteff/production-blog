import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { getUser } from './getUser'
import { getTestStore } from 'shared/lib'

describe('getUser.test.ts', () => {
  it('should return object with proper email value', () => {
    const email = 'test@gmail.com'
    const storeProps: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: { email, id: 1, username: 'Amigo' },
        _inited: true
      }
    }

    const store = getTestStore(storeProps)

    expect(getUser(store).email).toBe(email)
  })

  it('should return object with proper email value', () => {
    const storeProps: Pick<StoreProps, 'userReducer'> = {
      userReducer: {
        accessToken: '',
        user: {
          email: '',
          id: 0,
          username: ''
        },
        _inited: true
      }
    }

    const store = getTestStore(storeProps)

    expect(getUser(store).email).toBe('')
  })
})
