import s from './CommentList.module.scss'
import { classNames } from 'shared/lib'
import { memo, useEffect } from 'react'
import { Text, Title } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { Comment } from '../../model/types/comment'

interface CommentListProps {
  comments: Comment[]
}

export const CommentList = memo(({ comments }: CommentListProps) => {
  const { t } = useTranslation('article')

  useEffect(() => {
    if (PROJECT_ENV !== 'storybook') {
      // dispatch(getCommentsByArticleId)
    }
  }, [])

  return (
    <div className={classNames(s['comment-list'])}>
      <Title align="left">{t('comments')}</Title>
      {comments.length ? (
        comments.map((comment) => {
          return <CommentCard key={comment.id} comment={comment} />
        })
      ) : (
        <>
          <Text>{t('theres-no-comments')}</Text>
        </>
      )}
    </div>
  )
})
