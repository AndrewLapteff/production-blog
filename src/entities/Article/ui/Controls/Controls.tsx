import s from './Controls.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Button } from 'shared/ui'
import Eye from 'shared/assets/icons/eye.svg'
import Share from 'shared/assets/icons/share.svg'
import Save from 'shared/assets/icons/save.svg'
import Like from 'shared/assets/icons/like.svg'
import Comment from 'shared/assets/icons/comment.svg'
import Calendar from 'shared/assets/icons/calendar.svg'
import { ArticleType } from '../../../Article/model/types/article'

interface ControlsProps extends Pick<ArticleType, 'views' | 'createdAt'> {}

export const Controls = memo((props: ControlsProps) => {
  const { createdAt, views } = props
  return (
    <div className={classNames(s['article-info'])}>
      <div className={s['meta-info']}>
        <span className={s.item}>
          <Eye width={20} height={20} />
          {views}
        </span>
        <span className={s.item}>
          <Calendar width={18} height={18} />
          <span style={{ marginLeft: '2px' }}>{createdAt}</span>
        </span>
        <span className={s.item}>
          <Button variant="icon">
            <Like width={20} height={20} />
          </Button>
          153
        </span>
        <span className={s.item}>
          <Button variant="icon">
            <Comment width={20} height={20} />
          </Button>
          2
        </span>
      </div>
      <div className={s.controls}>
        <Button variant="icon">
          <Share width={19} height={19} />
        </Button>
        <Button variant="icon">
          <Save width={20} height={20} />
        </Button>
      </div>
    </div>
  )
})
