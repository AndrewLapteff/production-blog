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
  ReturnType,
  string,
  ThunkConfig<unknown | AxiosError>
>('article/fetchArticleById', async (id, { rejectWithValue, extra }) => {
  try {
    const { data } = await extra.api.get<ArticleType>(`articles/${id}`, {
      params: { _expand: 'profile' }
    })

    const profile = data.profile
    delete data.profile
    if (!data) {
      throw new Error()
    }
    if (!profile) {
      throw new Error()
    }
    return { article: data, author: profile }
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue(error)
    return rejectWithValue(error)
  }
})
