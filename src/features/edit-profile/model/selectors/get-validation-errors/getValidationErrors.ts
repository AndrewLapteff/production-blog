import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getValidationErrors = (state: StoreProps) =>
  state?.profileReducer?.validationErrors
