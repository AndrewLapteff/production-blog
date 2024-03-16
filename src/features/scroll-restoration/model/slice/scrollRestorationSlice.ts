import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
  ScrollActionValues,
  ScrollRestorationSchema
} from '../types/scrollRestorationTypes'

const initialState: ScrollRestorationSchema = {}

export const scrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollValue: (
      state,
      { payload: { path, value } }: PayloadAction<ScrollActionValues>
    ) => {
      state[path] = value
    }
  }
})

export const { setScrollValue } = scrollRestorationSlice.actions

export const scrollRestorationSliceReducer = scrollRestorationSlice.reducer
