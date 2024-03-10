import { StoreProps } from 'app/providers/store-provider'

export const getIsLoadingArticles = (store: StoreProps) =>
  store.articlesReducer?.isLoading || false

export const getErrorArticles = (store: StoreProps) =>
  store.articlesReducer?.error || ''

export const getViewArticles = (store: StoreProps) =>
  store.articlesReducer?.view || 'classic'
