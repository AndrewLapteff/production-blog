import s from './NotificationCard.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Notification } from '../../'
import { AppLink, Text, VStack } from 'shared/ui'

interface NotificationCardProps {
  notification: Notification
}

export const NotificationCard = memo((props: NotificationCardProps) => {
  const {
    notification: { title, createdAt, description, href }
  } = props

  const descriptionText = <Text size="s">{description}</Text>

  return (
    <VStack align="start" className={classNames(s['notification-card'])}>
      <Text size="m">{title}</Text>
      {href ? (
        <AppLink target="_blank" to={href}>
          {descriptionText}
        </AppLink>
      ) : (
        <>{descriptionText}</>
      )}
      <Text size="xs">{createdAt}</Text>
    </VStack>
  )
})
