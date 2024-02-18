import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getError = (state: StoreProps) => state?.profileReducer?.error
