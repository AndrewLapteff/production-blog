import s from './CommentList.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Loader, Text, Title } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../comment-card/CommentCard'
import { Comment } from '../../model/types/comment'

interface CommentListProps {
  comments: Comment[]
  isLoading: boolean | undefined
}

export const CommentList = memo(({ comments, isLoading }: CommentListProps) => {
  const { t } = useTranslation('article')

  if (isLoading) return <Loader />

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
