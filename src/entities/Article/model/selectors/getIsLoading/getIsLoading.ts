import { StoreProps } from 'app/providers/store-provider'

export const getIsLoading = (store: StoreProps) =>
  store?.articleReducer?.isLoading
