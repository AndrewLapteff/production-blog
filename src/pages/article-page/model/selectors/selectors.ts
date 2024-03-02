import { StoreProps } from 'app/providers/store-provider'

export const getIsLoading = (store: StoreProps) =>
  store.commentsReducer?.isLoading || false

export const getError = (store: StoreProps) => store.commentsReducer?.error
