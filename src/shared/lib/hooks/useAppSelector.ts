import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<StoreProps> = useSelector
