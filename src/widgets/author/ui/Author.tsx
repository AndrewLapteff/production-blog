import s from './Author.module.scss'
import { memo } from 'react'
import { AppLink } from 'shared/ui'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { Profile } from 'entities/Profile'

interface AuthorProps extends Partial<Pick<Profile, 'username' | 'avatar'>> {
  time: string
}

export const Author = memo((props: AuthorProps) => {
  const { avatar, time, username } = props
  return (
    <div className={s['author-info']}>
      <Avatar outline size={40} alt={`${username}'s avatar`} src={avatar} />
      <div className={s.details}>
        <AppLink to={`profile/${username}`}>{username}</AppLink>
        <div>
          <span>{time}</span>
        </div>
      </div>
    </div>
  )
})
