import { PayloadAction } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const useDispatchCallbackWithArgs = <T>(
  payload: PayloadAction<T, any>
) => {
  const dispatch = useDispatch()

  return useCallback(() => {
    dispatch(payload)
  }, [dispatch, payload])
}
