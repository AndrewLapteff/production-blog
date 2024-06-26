import { createSlice } from '@reduxjs/toolkit'
import { ArticleSchema } from '../types/article'
import { fetchArticleById } from '../services/fetchArticleById'

const initialState: ArticleSchema = {
  article: undefined,
  isLoading: false,
  error: undefined,
  author: undefined
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.article = action.payload.article
      state.author = action.payload.author

      state.isLoading = false
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.error = action.payload as string
      state.isLoading = false
    })
  }
})

export const articleReducer = articleSlice.reducer
