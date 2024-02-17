import {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import { ProfileSchema } from 'entities/Profile'
import { UserSchema } from 'entities/User'
import { LoginSchema } from 'features/auth-by-username'

export interface StoreProps {
  userReducer: UserSchema
  loginReducer?: LoginSchema
  profileReducer?: ProfileSchema
}

export type ReducersNames = keyof StoreProps

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StoreProps>
  reduce: (state: StoreProps, action: Action) => ReducersMapObject<StoreProps>
  add: (key: ReducersNames, reducer: Reducer) => void
  remove: (key: ReducersNames) => void
}

export interface ExtendedStore extends EnhancedStore<StoreProps> {
  reducerManager: ReducerManager
}
