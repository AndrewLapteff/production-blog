import s from './Author.module.scss'
import { memo } from 'react'
import { AppLink } from 'shared/ui'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { Profile } from 'entities/Profile'

interface AuthorProps
  extends Partial<Pick<Profile, 'username' | 'avatar' | 'id'>> {
  time?: string
  size?: number
  fontSize?: number
}

export const Author = memo((props: AuthorProps) => {
  const { avatar, time, username, id, size = 40, fontSize } = props
  return (
    <div className={s['author-info']}>
      <Avatar outline size={size} alt={`${username}'s avatar`} src={avatar} />
      <div className={s.details}>
        <AppLink to={`/profiles/${id}`}>{username}</AppLink>
        {time && (
          <div>
            <span style={{ fontSize }}>{time}</span>
          </div>
        )}
      </div>
    </div>
  )
})
