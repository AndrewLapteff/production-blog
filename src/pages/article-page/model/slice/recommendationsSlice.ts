import { createSlice } from '@reduxjs/toolkit'
import { RecommendationsSchema } from '../types/recommendations'
import { fetchRecommendations } from '../service/fetchRecommendations/fetchRecommendations'

const initialState: RecommendationsSchema = {
  recommendations: [],
  isLoading: false,
  error: ''
}

const recommendationsSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendations.fulfilled, (state, action) => {
      state.isLoading = false
      state.recommendations = action.payload
    })
    builder.addCase(fetchRecommendations.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchRecommendations.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const recommendationsReducer = recommendationsSlice.reducer
