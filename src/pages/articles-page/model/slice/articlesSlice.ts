import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'
import { ArticlesSchema } from '../types/articles'
import { Article, ArticleView } from 'entities/Article/model/types/article'
import { fetchArticles } from '../services/fetchArticles'

const articlesAdapter = createEntityAdapter<Article, number>({
  selectId: (article: Article) => article.id
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    view: 'classic',
    isLoading: true,
    error: '',
    limit: 5,
    page: 1,
    hasMore: true,
    ids: [],
    entities: {}
  }),
  reducers: {
    addArticle(state, action: PayloadAction<Article>) {
      articlesAdapter.addOne(state, action.payload)
    },
    changeView(state, action: PayloadAction<ArticleView>) {
      state.view = action.payload
      if (action.payload === 'classic') state.limit = 5
      if (action.payload === 'compact') state.limit = 9
    },
    increasePageValue(state) {
      state.page = state.page + 1
    },
    init(state) {
      state.hasMore = true
      state.page = 1
      state.limit = 5
      state.isLoading = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false
      articlesAdapter.addMany(state, action.payload)
      state.hasMore = action.payload.length > 0
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

export const { addArticle, changeView, increasePageValue, init } =
  articlesSlice.actions

export const articlesSelector = articlesAdapter.getSelectors<StoreProps>(
  (state) => state?.articlesReducer || articlesAdapter.getInitialState()
)
