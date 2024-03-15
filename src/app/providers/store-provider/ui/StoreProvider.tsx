import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { createStore } from '../confg/store'
import { useNavigate } from 'react-router-dom'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { StoreProps } from '../types/Schema'

interface StoreProviderProps {
  children?: ReactNode
  initialState: StoreProps
  asyncReducers: ReducersMapObject<StoreProps>
}

export const StoreProvider = ({
  children,
  asyncReducers,
  initialState
}: StoreProviderProps) => {
  const store = createStore(initialState, asyncReducers)
  console.log('f')
  return <Provider store={store}>{children}</Provider>
}
