import { useThunkDispatch } from 'shared/lib'
import { memo } from 'react'
import { CommentList } from 'entities/Comment'
import { getIsLoading } from 'entities/Profile'
import { AddCommentFormAsync } from 'features/add-comment/ui/AddCommentForm.async'
import { commentsSelector } from 'pages/article-page'
import { fetchCommentById } from 'pages/article-page/model/service/fetchCommentById/fetchCommentById'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { Loader } from 'shared/ui'

interface commentsProps {
  articleId: number
}

export const Comments = memo(({ articleId }: commentsProps) => {
  const dispatch = useThunkDispatch()

  const comments = useSelector(commentsSelector.selectAll)

  useInitialEffect(
    async () => await dispatch(fetchCommentById(articleId)),
    'storybook'
  )

  const isLoading = useSelector(getIsLoading)

  if (isLoading) return <Loader />

  return (
    <>
      <CommentList comments={comments} />
      <AddCommentFormAsync articleId={articleId} profileId={1} />
    </>
  )
})
