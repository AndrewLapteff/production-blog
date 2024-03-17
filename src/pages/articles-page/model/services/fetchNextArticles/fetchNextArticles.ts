import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import {
  getHasMoreArticles,
  getPageArticles
} from '../../selectors/articlesSelectors'
import { increasePageValue } from '../../slice/articlesSlice'
import { fetchArticles } from '../fetchArticles/fetchArticles'

export const fetchNextArticles = createAsyncThunk<
  number,
  void,
  ThunkConfig<string>
>('articles/fetchNextArticle', async (_, { getState, dispatch }) => {
  const page = getPageArticles(getState())
  const hasMore = getHasMoreArticles(getState())

  if (hasMore) {
    dispatch(fetchArticles(page + 1))
    dispatch(increasePageValue())
  }
  return page
})
