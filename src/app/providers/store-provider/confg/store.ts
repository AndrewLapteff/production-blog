import { configureStore } from '@reduxjs/toolkit'
import counterSlice from 'app/state/counterSlice'
import { StoreProps } from '../types/Schema'

export const createStore = (initialState: StoreProps) => {
  return configureStore<StoreProps>({
    reducer: {
      counter: counterSlice
    },
    devTools: IS_DEV,
    preloadedState: initialState
  })
}

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
