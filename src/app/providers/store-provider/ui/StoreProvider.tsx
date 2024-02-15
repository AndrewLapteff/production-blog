import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'
import { createStore } from '../confg/store'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const store = createStore({
    loginReducer: {
      username: '',
      password: '',
      email: '',
      isLoading: false,
      error: undefined
    },
    userReducer: {
      user: {
        id: 1,
        username: '',
        email: ''
      },
      accessToken: ''
    }
  })

  return <Provider store={store}>{children}</Provider>
}
