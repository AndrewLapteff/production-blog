import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getUser = (state: StoreProps) => state?.userReducer?.user
