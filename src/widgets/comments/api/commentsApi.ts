import { Comment } from 'entities/Comment'
import { rtkApi } from 'shared/api/rtkQuery'

interface CommentsApiProps {
  limit: number
  articleId: number
}

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query<Comment[], CommentsApiProps>({
      query: ({ limit, articleId }) => ({
        url: 'comments',
        params: { _limit: limit, _expand: 'profile', articleId }
      })
    })
  }),
  overrideExisting: false
})

export const useComments = commentsApi.useGetCommentsQuery
