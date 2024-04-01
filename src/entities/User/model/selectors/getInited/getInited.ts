import { StoreProps } from 'app/providers/store-provider/types/Schema'

export const getInited = (state: StoreProps) =>
  state?.userReducer?._inited ?? false
