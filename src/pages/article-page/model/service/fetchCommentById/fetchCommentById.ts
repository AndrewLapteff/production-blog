import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider'
import { Comment } from 'entities/Comment'

export const fetchCommentById = createAsyncThunk<
  Comment[],
  string | undefined,
  ThunkConfig<string>
>('comment/fetchCommentById', async (articleId, { rejectWithValue, extra }) => {
  if (!articleId) {
    return rejectWithValue('No article id')
  }

  try {
    const { data: comments } = await extra.api.get<Comment[]>(`comments`, {
      params: { articleId }
    })

    if (!comments) {
      throw new Error()
    }

    return comments
  } catch (error) {
    return rejectWithValue('Smth went wrong')
  }
})
