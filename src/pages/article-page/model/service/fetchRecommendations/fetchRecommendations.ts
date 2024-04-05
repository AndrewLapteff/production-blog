import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { ArticleType } from 'entities/Article'
import { AMOUNT_OF_RECOMMENDATIONS } from 'shared/consts/common'

export const fetchRecommendations = createAsyncThunk<
  ArticleType[],
  void,
  ThunkConfig<string>
>('articles/fetchRecommendations', async (_, { rejectWithValue, extra }) => {
  console.log('fetch')
  try {
    const { data } = await extra.api.get<ArticleType[]>(`articles`, {
      params: {
        _limit: AMOUNT_OF_RECOMMENDATIONS
      }
    })
    return data
  } catch (error) {
    return rejectWithValue('Something went wrong')
  }
})
