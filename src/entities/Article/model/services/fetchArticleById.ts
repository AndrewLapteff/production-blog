import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from '../types/article'

export const fetchArticleById = createAsyncThunk<
  ArticleType, // returns when fulfilled
  string, // arg that provides when you call this func
  ThunkConfig<unknown | AxiosError> // returns when rejects
>('article/fetchArticleById', async (id, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<ArticleType>(`articles/${id}`)
    if (!data) {
      throw new Error()
    }
    return data
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue(error)
    return rejectWithValue(error)
  }
})
