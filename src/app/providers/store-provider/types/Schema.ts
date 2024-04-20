import type {
  Action,
  EnhancedStore,
  Reducer,
  ReducersMapObject
} from '@reduxjs/toolkit'
import type { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'
import type { AxiosInstance } from 'axios'
import type { ArticleSchema } from 'entities/Article'
import type { ProfileSchema } from 'entities/Profile'
import type { UserSchema } from 'entities/User'
import type { LoginSchema } from 'features/auth-by-username'
import type { AddCommnetForm } from 'features/add-comment'
import type { CommentsSchema } from 'pages/article-page'
import type { ArticlesSchema } from 'pages/articles-page'
import type { NavigateFunction } from 'react-router-dom'
import { ScrollRestorationSchema } from 'features/scroll-restoration'
import { RecommendationsSchema } from 'pages/article-page/model/types/recommendations'
import { rtkApi } from 'shared/api/rtkQuery'

export interface StoreProps {
  userReducer: UserSchema
  scrollRestorationSliceReducer: ScrollRestorationSchema
  loginReducer?: LoginSchema
  profileReducer?: ProfileSchema
  articleReducer?: ArticleSchema
  articlesReducer?: ArticlesSchema
  commentsReducer?: CommentsSchema
  recommendationsReducer?: RecommendationsSchema
  addCommentForm?: AddCommnetForm
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
