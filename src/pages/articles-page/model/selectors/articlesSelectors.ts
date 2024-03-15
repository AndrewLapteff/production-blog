import { StoreProps } from 'app/providers/store-provider'

export const getIsLoadingArticles = (store: StoreProps) =>
  store.articlesReducer?.isLoading || false

export const getErrorArticles = (store: StoreProps) =>
  store.articlesReducer?.error || ''

export const getViewArticles = (store: StoreProps) =>
  store.articlesReducer?.view || 'classic'

export const getLimitArticles = (store: StoreProps) =>
  store.articlesReducer?.limit || 5

export const getPageArticles = (store: StoreProps) =>
  store.articlesReducer?.page || 0

export const getHasMoreArticles = (store: StoreProps) =>
  store.articlesReducer?.hasMore

export const getIsInitArticles = (store: StoreProps) =>
  store.articlesReducer?._inited
