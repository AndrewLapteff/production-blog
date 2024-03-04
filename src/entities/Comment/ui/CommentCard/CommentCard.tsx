import s from './CommentCard.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Author } from 'widgets/author'
import { Comment } from '../../model/types/comment'
import { Button, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import Dots from 'shared/assets/icons/dots.svg'
import Like from 'shared/assets/icons/like.svg'

interface CommentCardProps {
  comment: Comment
}

export const CommentCard = memo(({ comment }: CommentCardProps) => {
  const { t } = useTranslation('translation')

  return (
    <div className={classNames(s['comment-card'])}>
      <Author
        id={comment.profile?.id || 0}
        username={comment.profile?.username || ''}
        avatar={comment.profile?.avatar}
        time={comment.createdAt}
      />
      <Text size="s" className={s['comment-text']}>
        {comment.text}
      </Text>
      <Button variant="icon" className={s.controls}>
        <Dots width={20} height={20} />
      </Button>
      <div className={s['controls-bar']}>
        <Button variant="icon">
          <Like height={15} width={15} />
          <span style={{ marginLeft: '4px' }}>4</span>
        </Button>
        <Button variant="clear" size="s">
          {t('reply')}
        </Button>
      </div>
    </div>
  )
})
