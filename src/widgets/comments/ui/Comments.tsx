import { useThunkDispatch } from 'shared/lib'
import { memo } from 'react'
import { CommentList } from 'entities/Comment'
import { fetchCommentById } from 'pages/article-page/model/service/fetchCommentById/fetchCommentById'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import AddCommentForm from 'features/add-comment'
import { useComments } from '../api/commentsApi'

interface CommentsProps {
  articleId: number
}

export const Comments = memo(({ articleId }: CommentsProps) => {
  const dispatch = useThunkDispatch()

  // const comments = useSelector(commentsSelector.selectAll)
  // const isLoading = useSelector(getIsLoadingComments)

  const { data: comments, isLoading } = useComments({ limit: 10, articleId })

  useInitialEffect(
    async () => await dispatch(fetchCommentById(articleId)),
    'storybook'
  )

  return (
    <>
      <CommentList comments={comments} isLoading={isLoading} />
      <AddCommentForm articleId={articleId} />
    </>
  )
})
