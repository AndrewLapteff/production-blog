import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getProfile = (state: StoreProps) => state?.profileReducer?.profile
