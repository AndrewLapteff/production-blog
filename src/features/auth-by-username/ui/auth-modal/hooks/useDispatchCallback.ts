import { ActionCreatorWithOptionalPayload } from '@reduxjs/toolkit'
import { useCallback, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

export const useDispatchCallback = (
  actionCallback: ActionCreatorWithOptionalPayload<string>
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
