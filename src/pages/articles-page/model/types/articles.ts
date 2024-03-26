import { EntityState } from '@reduxjs/toolkit'
import {
  ArticleSort,
  ArticleSortOrder,
  ArticleType,
  ArticleView
} from 'entities/Article'

export interface ArticlesSchema extends EntityState<ArticleType, number> {
  isLoading: boolean
  error: string
  view: ArticleView
  page: number
  limit: number
  hasMore: boolean
  sort: ArticleSort
  sortOrder: ArticleSortOrder
  search: string
  _inited: boolean
}
