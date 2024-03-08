import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/store-provider/types/Schema'
import { Comment } from 'entities/Comment'
import { addComment } from 'pages/article-page'
import { prepareDate } from '../lib/prepareDate'
import { Profile } from 'entities/Profile'
import { getUser } from 'entities/User'
import { removeText } from '../slice/commentFormSlice'

export const postComment = createAsyncThunk<
  Comment,
  MakeOptional<Comment, 'createdAt' | 'id' | 'profileId'>,
  ThunkConfig<string>
>(
  'comments/postComment',
  async (
    { articleId, text },
    { getState, dispatch, rejectWithValue, extra }
  ) => {
    const date = new Date()
    const day = prepareDate(date.getDate())
    const month = prepareDate(date.getMonth())
    const year = prepareDate(date.getFullYear())

    const user = getUser(getState())

    const { data: profiles } = await extra.api.get<Profile[]>('profiles', {
      params: { userId: user.id }
    })

    const profile = profiles[0]

    if (!profile.id) rejectWithValue('Profile is not found')

    const comment: MakeOptional<Comment, 'id'> = {
      articleId,
      profileId: profile.id,
      createdAt: `${day}.${month}.${year}`,
      text
    }

    try {
      const { data: newComment } = await extra.api.post<Comment>(
        'comments',
        comment
      )

      newComment.profile = profile
      dispatch(addComment(newComment))
      dispatch(removeText())

      return newComment
    } catch (error) {
      return rejectWithValue('Something went wrong')
    }
  }
)
