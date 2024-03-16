import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const testStore: StoreProps = {
  loginReducer: {
    username: '',
    password: '',
    email: '',
    isLoading: false,
    error: undefined
  },
  scrollRestorationSliceReducer: {},
  userReducer: {
    user: {
      id: 1,
      username: '',
      email: ''
    },
    accessToken: ''
  }
}
