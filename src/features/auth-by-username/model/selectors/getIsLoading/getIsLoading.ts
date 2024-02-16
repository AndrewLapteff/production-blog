import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getIsLoading = (store: StoreProps) =>
  store?.loginReducer?.isLoading || false
