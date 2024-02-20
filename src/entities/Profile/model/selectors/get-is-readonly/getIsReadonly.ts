import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getIsReadonly = (state: StoreProps) =>
  state?.profileReducer?.readonly
