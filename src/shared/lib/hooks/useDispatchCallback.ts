import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

type EventType = ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>

export const useDispatchCallback = <T>(
  actionCallback: ActionCreatorWithPayload<T, any>
) => {
  const dispatch = useDispatch()

  // Use of useCallback hook because this component reloads because of useSelector subscribtion
  return useCallback(
    (e: EventType) => {
      return dispatch(actionCallback(e.target.value as T))
    },
    [dispatch, actionCallback]
  )
}
