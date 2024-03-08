import {
  PayloadAction,
  createEntityAdapter,
  createSlice
} from '@reduxjs/toolkit'
import { StoreProps } from 'app/providers/store-provider'
import { CommentsSchema } from '../types/comments'
import { Comment } from 'entities/Comment'
import { fetchCommentById as fetchCommentsByArticleId } from '../service/fetchCommentById/fetchCommentById'

const commentsAdapter = createEntityAdapter<Comment, number>({
  selectId: (comment: Comment) => comment.id
})

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState<CommentsSchema>({
    isLoading: false,
    error: '',
    ids: [],
    entities: {}
  }),
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      commentsAdapter.addOne(state, action.payload)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false
      commentsAdapter.setAll(state, action.payload)
    })
    builder.addCase(fetchCommentsByArticleId.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const commentsReducer = commentsSlice.reducer

export const { addComment } = commentsSlice.actions

export const commentsSelector = commentsAdapter.getSelectors<StoreProps>(
  (state) => state?.commentsReducer || commentsAdapter.getInitialState()
)
