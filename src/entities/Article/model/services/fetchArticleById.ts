import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from '../types/article'
import { Profile } from '../../../Profile'

interface ReturnType {
  article: ArticleType
  author: Profile
}

export const fetchArticleById = createAsyncThunk<
  ReturnType, // returns when fulfilled
  string, // arg that provides when you call this func
  ThunkConfig<unknown | AxiosError> // returns when rejects
>('article/fetchArticleById', async (id, { rejectWithValue, extra }) => {
  try {
    const { data: article } = await extra.api.get<ArticleType>(`articles/${id}`)
    if (!article) {
      throw new Error()
    }
    const { data: author } = await extra.api.get<Profile>('profile', {
      data: { id: 1 }
    })
    if (!article || !author) {
      throw new Error()
    }
    return { article, author }
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue(error)
    return rejectWithValue(error)
  }
})
