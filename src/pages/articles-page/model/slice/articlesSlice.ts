import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'
import { ArticlesSchema } from '../types/articles'
import { Article } from 'entities/Article/model/types/article'
import { fetchArticles } from '../services/fetchArticles'

const articlesAdapter = createEntityAdapter<Article, number>({
  selectId: (article: Article) => article.id
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    view: 'classic',
    isLoading: false,
    error: '',
    ids: [],
    entities: {}
  }),
  reducers: {
    addArticle(state, action: PayloadAction<Article>) {
      articlesAdapter.addOne(state, action.payload)
    },
    changeView(state) {
      if (state.view === 'compact') {
        state.view = 'classic'
      } else {
        state.view = 'compact'
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false
      articlesAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false
      state.error = action?.payload || ''
    })
  }
})

export const articlesReducer = articlesSlice.reducer

export const { addArticle, changeView } = articlesSlice.actions

export const articlesSelector = articlesAdapter.getSelectors<StoreProps>(
  (state) => state?.articlesReducer || articlesAdapter.getInitialState()
)
