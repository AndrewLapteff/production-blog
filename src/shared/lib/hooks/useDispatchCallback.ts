import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export const useDispatchCallback = <T>(
  actionCallback: ActionCreatorWithPayload<T, any>
) => {
  const dispatch = useDispatch()

  // Use of useCallback hook because this component reloads because of useSelector subscribtion
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return dispatch(actionCallback(e.target.value as T))
    },
    [dispatch, actionCallback]
  )
}
