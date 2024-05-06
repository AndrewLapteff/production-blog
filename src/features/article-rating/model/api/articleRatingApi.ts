import { rtkApi } from 'shared/api/rtkQuery'
import { ArticleRating } from '../types/articleRating'

interface ArticleRatingApiProps {
  userId: number | undefined
  articleId: number
}

interface ArticleRatingApiPostProps extends ArticleRatingApiProps {
  message: string
  rating: number
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRating: build.query<ArticleRating[], ArticleRatingApiProps>({
      query: ({ userId, articleId }) => ({
        url: '/article-rating',
        params: { userId, articleId }
      })
    }),
    postArticleRating: build.mutation<void, ArticleRatingApiPostProps>({
      query: (args) => ({
        url: 'article-rating',
        method: 'POST',
        body: args
      })
    })
  })
})

export const useArticleRating = articleRatingApi.useGetArticleRatingQuery
export const usePostArticleRating =
  articleRatingApi.usePostArticleRatingMutation
