import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from 'entities/Article'

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  void,
  ThunkConfig<string>
>('articles/fetchArticles', async (id, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<ArticleType[]>(`articles`, {
      params: { _expand: 'profile' }
    })

    return data
  } catch (error) {
    return rejectWithValue('Something went wrong')
  }
})
