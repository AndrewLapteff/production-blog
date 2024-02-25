import { StoreProps } from 'app/providers/store-provider'

export const getError = (store: StoreProps) => store?.articleReducer?.error
