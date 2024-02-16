import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getUsername = (store: StoreProps) =>
  store?.loginReducer?.username || ''
