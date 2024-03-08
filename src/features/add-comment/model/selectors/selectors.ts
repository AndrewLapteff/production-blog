import { StoreProps } from 'app/providers/store-provider'

export const getIsLoading = (store: StoreProps) =>
  store.addCommentForm?.isLoading || false

export const getError = (store: StoreProps) => store.addCommentForm?.error

export const getText = (store: StoreProps) => store.addCommentForm?.text
