import { Rating } from 'entities/Rating'
import {
  useArticleRating,
  usePostArticleRating
} from '../model/api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUser } from 'entities/User'
import { memo } from 'react'

const ArticleRating = memo((props: { id: number }) => {
  const user = useSelector(getUser)

  const { isLoading, data, isError } = useArticleRating({
    userId: user?.id,
    articleId: props.id
  })
  const [updatePost] = usePostArticleRating()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error...</div>
  }

  return (
    <Rating
      rate={data?.[0]?.rating}
      title="Rating"
      stars={5}
      size={30}
      onAccept={(star: number) => {
        updatePost({
          rating: star,
          message: 'message',
          userId: user?.id,
          articleId: props.id
        })
      }}
      onCancel={() => {}}
    />
  )
})

export default ArticleRating
