import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { postComment } from '../service/postComment'
import { AddCommnetForm } from '../types/commentForm'

const initialState: AddCommnetForm = {
  isLoading: false,
  text: '',
  error: ''
}

export const addCommentFormSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    removeText: (state) => {
      state.text = ''
    }
  },
  extraReducers: (builder) => {
    builder.addCase(postComment.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(postComment.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(postComment.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload
      }
      state.isLoading = false
    })
  }
})

export const { removeText, setText } = addCommentFormSlice.actions

export const addCommentFormReducer = addCommentFormSlice.reducer
