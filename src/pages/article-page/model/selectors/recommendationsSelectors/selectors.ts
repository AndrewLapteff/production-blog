import { StoreProps } from 'app/providers/store-provider'

export const getRecommendations = (store: StoreProps) =>
  store.recommendationsReducer?.recommendations ?? []

export const getIsLoadingRecommendations = (store: StoreProps) =>
  store.recommendationsReducer?.isLoading || false

export const getErrorRecommendations = (store: StoreProps) =>
  store.recommendationsReducer?.error
