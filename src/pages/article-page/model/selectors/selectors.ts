import { createSelector } from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'
import { getArticle } from 'entities/Article/model/selectors/getArticle/getArticle'
import { getUser } from 'entities/User'

export const getIsLoadingComments = (store: StoreProps) =>
  store.commentsReducer?.isLoading || false

export const getErrorComments = (store: StoreProps) =>
  store.commentsReducer?.error

export const getCanUserEditArticle = createSelector(
  getUser,
  getArticle,
  (user, article) => {
    if (!user) return false

    console.log(user.id, article?.profileId)

    return user.id === article?.profileId
  }
)
