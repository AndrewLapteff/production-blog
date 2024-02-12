import { Provider } from 'react-redux'
import { PropsWithChildren } from 'react'
import { createStore } from '../confg/store'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const store = createStore({
    counter: { value: 1 },
    userReducer: { user: { id: 1, username: '' } }
  })

  return <Provider store={store}>{children}</Provider>
}
