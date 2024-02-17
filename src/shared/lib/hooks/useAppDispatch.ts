import { DispatchStoreTypes } from 'app/providers/store-provider/confg/store'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<DispatchStoreTypes>()
