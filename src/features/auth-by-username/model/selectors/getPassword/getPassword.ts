import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getPassword = (store: StoreProps) =>
  store?.loginReducer?.password || ''
