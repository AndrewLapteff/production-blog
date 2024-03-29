import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Comment } from 'entities/Comment'

export const fetchCommentById = createAsyncThunk<
  Comment[],
  number | undefined,
  ThunkConfig<string>
>(
  'comment/fetchCommentById',
  async (articleId, { rejectWithValue, extra, dispatch }) => {
    if (!articleId) {
      return rejectWithValue('No article id')
    }

    try {
      const { data: comments } = await extra.api.get<Comment[]>(`comments`, {
        params: { articleId, _expand: 'profile' }
      })

      if (!comments) {
        throw new Error()
      }
      return comments
    } catch (error) {
      return rejectWithValue('Smth went wrong')
    }
  }
)
