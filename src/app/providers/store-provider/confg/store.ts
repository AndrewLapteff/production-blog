import { configureStore } from '@reduxjs/toolkit'
import { StoreProps } from '../types/Schema'
import { userReducer } from 'entities/User'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { createReducerManager } from '../reducer-manager/reducerManager'

const initialReducers = { userReducer }

export const createStore = (initialState: StoreProps) => {
  const reducerManager = createReducerManager(initialReducers)

  const store = configureStore<StoreProps>({
    // @ts-expect-error
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState
  })

  // @ts-expect-error
  store.reducerManager = reducerManager

  return store
}

export const useAppSelector: TypedUseSelectorHook<StoreProps> = useSelector

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
