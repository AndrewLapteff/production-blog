import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from 'entities/Article'
import {
  getLimitArticles,
  getPageArticles,
  getSearchArticles,
  getSortArticles,
  getSortOrderArticles
} from '../../selectors/articlesSelectors'
import { setQueryParams } from 'shared/lib/url/setQueryParams/setQueryParams'

interface FetchArticlesProps {
  replace?: boolean
}

export const fetchArticles = createAsyncThunk<
  ArticleType[],
  FetchArticlesProps,
  ThunkConfig<string>
>('articles/fetchArticles', async (_, { rejectWithValue, getState, extra }) => {
  const page = getPageArticles(getState())
  const limit = getLimitArticles(getState())
  const sortOrder = getSortOrderArticles(getState())
  const sort = getSortArticles(getState())
  const search = getSearchArticles(getState())

  setQueryParams({ sort, sortOrder, search })
  try {
    const { data } = await extra.api.get<ArticleType[]>(`articles`, {
      params: {
        _expand: 'profile',
        _page: page,
        _limit: limit,
        _sort: sort,
        _order: sortOrder,
        q: search
      }
    })
    return data
  } catch (error) {
    return rejectWithValue('Something went wrong')
  }
})
