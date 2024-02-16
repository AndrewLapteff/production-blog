import {
  AnyAction,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
  UnknownAction,
  combineReducers
} from '@reduxjs/toolkit'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/auth-by-username'

export interface StoreProps {
  userReducer: UserSchema
  loginReducer?: LoginSchema
}

export type ReducersNames = keyof StoreProps

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreProps>
  reduce: (
    state: StoreProps,
    action: AnyAction
  ) => ReducersMapObject<StoreProps>
  add: (key: ReducersNames, reducer: Reducer) => void
  remove: (key: ReducersNames) => void
}

export interface ExtendedStore extends EnhancedStore<StoreProps> {
  reducerManager: ReducerManager
}
