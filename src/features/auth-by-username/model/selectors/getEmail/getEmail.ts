import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getEmail = (store: StoreProps) => store?.loginReducer?.email || ''
