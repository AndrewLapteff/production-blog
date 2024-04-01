import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'
import { ArticlesSchema } from '../types/articles'
import {
  ArticleSort,
  ArticleSortOrder,
  ArticleType,
  ArticleView
} from 'entities/Article/model/types/article'
import { fetchArticles } from '../services/fetchArticles/fetchArticles'

const articlesAdapter = createEntityAdapter<ArticleType, number>({
  selectId: (article: ArticleType) => article.id
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    views: 'classic',
    isLoading: true,
    error: '',
    limit: 5,
    page: 0,
    hasMore: true,
    ids: [],
    entities: {},
    sortOrder: 'asc',
    sort: 'views',
    search: '',
    _inited: false
  }),
  reducers: {
    addArticle(state, action: PayloadAction<ArticleType>) {
      articlesAdapter.addOne(state, action.payload)
    },
    changeView(state, action: PayloadAction<ArticleView>) {
      state.views = action.payload
      if (action.payload === 'classic') state.limit = 5
      if (action.payload === 'compact') state.limit = 9
    },
    setSort(state, action: PayloadAction<ArticleSort>) {
      state.sort = action.payload
      state.page = 1
    },
    setSortOrder(state, action: PayloadAction<ArticleSortOrder>) {
      state.sortOrder = action.payload
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload
    },
    increasePageValue(state) {
      state.page = state.page + 1
    },
    init(state) {
      state._inited = true
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload)
      } else {
        articlesAdapter.addMany(state, action.payload)
      }
      state.isLoading = false
      state.hasMore = action.payload.length >= state.limit
    })
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.isLoading = true
      state.error = ''
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state)
      }
    })
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.isLoading = false
      state.error = action?.payload || ''
    })
  }
})

export const articlesReducer = articlesSlice.reducer

export const {
  addArticle,
  changeView,
  increasePageValue,
  init,
  setSearch,
  setSort,
  setSortOrder
} = articlesSlice.actions

export const articlesSelector = articlesAdapter.getSelectors<StoreProps>(
  (state) => state?.articlesReducer || articlesAdapter.getInitialState()
)
