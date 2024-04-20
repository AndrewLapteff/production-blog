import { rtkApi } from 'shared/api/rtkQuery'

const commentsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getComments: build.query({
      query: ({ limit, articleId }) => ({
        url: 'comments',
        params: { _limit: limit, _expand: 'profile', articleId }
      })
    })
  }),
  overrideExisting: false
})

export const useComments = commentsApi.useGetCommentsQuery
