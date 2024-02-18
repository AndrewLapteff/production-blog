import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

type ReducerNames = 'login/setUsername' | 'login/setPassword' | 'login/setEmail'

export const useDispatchCallback = (
  actionCallback: ActionCreatorWithPayload<string, ReducerNames>
) => {
  const dispatch = useDispatch()

  // Use of useCallback hook because this component reloads because of useSelector subscribtion
  return useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return dispatch(actionCallback(e.target.value))
    },
    [dispatch, actionCallback]
  )
}
