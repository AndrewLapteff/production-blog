import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getError = (store: StoreProps) =>
  store?.loginReducer?.error || undefined
