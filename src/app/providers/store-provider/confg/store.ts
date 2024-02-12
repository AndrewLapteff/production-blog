import { configureStore } from '@reduxjs/toolkit'
import counterSlice from 'app/state/counterSlice'
import { StoreProps } from '../types/Schema'
import { userReducer } from 'entities/User'

export const createStore = (initialState: StoreProps) => {
  return configureStore<StoreProps>({
    reducer: {
      counter: counterSlice,
      userReducer
    },
    devTools: IS_DEV,
    preloadedState: initialState
  })
}

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
