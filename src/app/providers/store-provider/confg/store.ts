import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StoreProps } from '../types/Schema'
import { createReducerManager } from '../reducer-manager/reducerManager'
import { $api } from 'shared/api/api'
import { rtkApi } from 'shared/api/rtkQuery'

export const createStore = (
  props: StoreProps,
  asyncReducers: ReducersMapObject<StoreProps>
) => {
  const reducerManager = createReducerManager(asyncReducers)
  const { navigate, ...reducers } = props
  const store = configureStore<StoreProps>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: reducers,
    // @ts-expect-error
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate
          }
        }
      }).concat(rtkApi.middleware)
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export type DispatchStoreTypes = ReturnType<typeof createStore>['dispatch']
