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
    isLoading: true,
    error: undefined,
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
      state.isLoading = true
      commentsAdapter.setAll(state, action.payload)
    })
  }
})

export const commentsReducer = commentsSlice.reducer

export const { addComment } = commentsSlice.actions

export const commentsSelector = commentsAdapter.getSelectors<StoreProps>(
  (state) => state?.commentsReducer || commentsAdapter.getInitialState()
)
