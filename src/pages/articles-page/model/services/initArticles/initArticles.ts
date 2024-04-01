import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import {
  init,
  setSearch,
  setSort,
  setSortOrder
} from '../../slice/articlesSlice'
import { ArticleSort, ArticleSortOrder } from 'entities/Article'

interface InitArticlesProps {
  sortOrder: string | null
  sort: string | null
  search: string | null
}

export const initArticles = createAsyncThunk<
  void,
  InitArticlesProps,
  ThunkConfig<string>
>('articles/init', async ({ sortOrder, search, sort }, { dispatch }) => {
  if (sortOrder) {
    dispatch(setSortOrder(sortOrder as ArticleSortOrder))
  }
  if (sort) {
    dispatch(setSort(sort as ArticleSort))
  }
  if (search) {
    dispatch(setSearch(search || ''))
  }
  dispatch(init())
})
