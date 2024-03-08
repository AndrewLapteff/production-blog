import { StoreProps } from 'app/providers/store-provider'

export const getIsLoadingComments = (store: StoreProps) =>
  store.commentsReducer?.isLoading || false

export const getErrorComments = (store: StoreProps) =>
  store.commentsReducer?.error
