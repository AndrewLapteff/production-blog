import { StoreProps } from 'app/providers/store-provider'

export const getTestStore = ({
  addCommentForm,
  articleReducer,
  articlesReducer,
  commentsReducer,
  loginReducer,
  navigate,
  profileReducer,
  scrollRestorationSliceReducer,
  userReducer
}: Partial<StoreProps> = {}) => {
  const store: StoreProps = {
    userReducer: userReducer || {
      user: {
        id: 1,
        username: '',
        email: ''
      },
      accessToken: ''
    },
    scrollRestorationSliceReducer: scrollRestorationSliceReducer || {},
    profileReducer
  }

  return store
}
