import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'
import { createStore } from '../confg/store'
import { useNavigate } from 'react-router-dom'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate()
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
    },
    navigate
  })

  return <Provider store={store}>{children}</Provider>
}
