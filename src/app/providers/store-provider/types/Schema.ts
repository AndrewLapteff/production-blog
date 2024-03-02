import type {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import type { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'
import type { AxiosInstance } from 'axios'
import { ArticleSchema } from 'entities/Article/model/types/article'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/auth-by-username'
import { CommentsSchema } from 'pages/article-page'
import { NavigateFunction } from 'react-router-dom'

export interface StoreProps {
  userReducer: UserSchema
  loginReducer?: LoginSchema
  profileReducer?: ProfileSchema
  articleReducer?: ArticleSchema
  commentsReducer?: CommentsSchema
  navigate?: NavigateFunction
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

interface ThunkExtraArgs {
  api: AxiosInstance
  navigate: NavigateFunction
}

export interface ThunkConfig<T> extends AsyncThunkConfig {
  rejectValue: T
  extra: ThunkExtraArgs // override
  state: StoreProps
}
