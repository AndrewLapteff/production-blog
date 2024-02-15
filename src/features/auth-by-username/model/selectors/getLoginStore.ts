import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getLoginStore = (store: StoreProps) => store.loginReducer
