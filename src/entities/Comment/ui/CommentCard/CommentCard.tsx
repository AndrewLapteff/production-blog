import s from './CommentCard.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Author } from 'widgets/author'
import { Comment } from '../../model/types/comment'
import { Text } from 'shared/ui'

interface CommentCardProps {
  comment: Comment
}

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  return (
    <div className={classNames(s['comment-card'])}>
      <Author
        username="Amigo"
        avatar="https://avatars.githubusercontent.com/u/114949478?v=4"
        time={comment.createdAt}
      />
      <Text size="s" className={s['comment-text']}>
        {comment.text}
      </Text>
    </div>
  )
})
