import { EntityState } from '@reduxjs/toolkit'
import { ArticleType, ArticleView } from 'entities/Article'

export interface ArticlesSchema extends EntityState<ArticleType, number> {
  isLoading: boolean
  error: string
  view: ArticleView
  page: number
  limit: number
  hasMore: boolean
  _inited: boolean
}
