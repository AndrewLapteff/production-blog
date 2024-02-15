import { ThunkDispatch, AnyAction } from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { useDispatch } from 'react-redux'

export const useThunkDispatch = () => {
  return useDispatch<ThunkDispatch<StoreProps, any, AnyAction>>()
}
