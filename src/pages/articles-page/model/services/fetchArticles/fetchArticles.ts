import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from 'entities/Article'

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  number,
  ThunkConfig<string>
>('articles/fetchArticles', async (page, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<ArticleType[]>(`articles`, {
      params: { _expand: 'profile', _page: page, _limit: 3 }
    })
    return data
  } catch (error) {
    return rejectWithValue('Something went wrong')
  }
})
