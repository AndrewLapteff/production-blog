import { useThunkDispatch } from 'shared/lib'
import { memo } from 'react'
import { CommentList } from 'entities/Comment'
import { commentsSelector } from 'pages/article-page'
import { fetchCommentById } from 'pages/article-page/model/service/fetchCommentById/fetchCommentById'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import AddCommentForm from 'features/add-comment'
import { getIsLoadingComments } from 'pages/article-page/model/selectors/selectors'

interface CommentsProps {
  articleId: number
}

export const Comments = memo(({ articleId }: CommentsProps) => {
  const dispatch = useThunkDispatch()

  const comments = useSelector(commentsSelector.selectAll)

  useInitialEffect(
    async () => await dispatch(fetchCommentById(articleId)),
    'storybook'
  )

  const isLoading = useSelector(getIsLoadingComments)

  return (
    <>
      <CommentList comments={comments} isLoading={isLoading} />
      <AddCommentForm articleId={articleId} />
    </>
  )
})
