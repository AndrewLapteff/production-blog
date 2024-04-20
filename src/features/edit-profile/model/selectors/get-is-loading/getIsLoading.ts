import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getIsLoading = (state: StoreProps) =>
  state?.profileReducer?.isLoading
