import { configureStore } from '@reduxjs/toolkit'
import { StoreProps } from '../types/Schema'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/auth-by-username'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const createStore = (initialState: StoreProps) => {
  return configureStore<StoreProps>({
    reducer: {
      userReducer,
      loginReducer
    },
    devTools: false,
    preloadedState: initialState
  })
}

export const useAppSelector: TypedUseSelectorHook<StoreProps> = useSelector

// export type RootState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch
