import { configureStore } from '@reduxjs/toolkit'
import { StoreProps } from '../types/Schema'
import { userReducer } from 'entities/User'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createReducerManager } from '../reducer-manager/reducerManager'
import { $api } from 'shared/api/api'

const initialReducers = { userReducer }

export const createStore = (props: StoreProps) => {
  const reducerManager = createReducerManager(initialReducers)
  const { navigate, ...reducers } = props
  const store = configureStore<StoreProps>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: reducers,
    middleware: (MiddleWare) =>
      MiddleWare({
        thunk: {
          extraArgument: {
            api: $api,
            navigate
          }
        }
      })
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export const useAppSelector: TypedUseSelectorHook<StoreProps> = useSelector

export type DispatchStoreTypes = ReturnType<typeof createStore>['dispatch']
