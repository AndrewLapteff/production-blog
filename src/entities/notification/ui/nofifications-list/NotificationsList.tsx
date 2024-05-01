import s from './NotificationsList.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { Title, VStack } from 'shared/ui'
import { NotificationCard } from '../notification-card/NotificationCard'
import { useNotifications } from '../../api/notificationApi'
import { NotificationsListSkeleton } from '../notifications-list-skeleton/NotificationsListSkeleton'

export const NotificationsList = memo(
  ({ profileId }: { profileId: number }) => {
    const { data: notifications, isLoading } = useNotifications(
      {
        limit: 10,
        profileId
      },
      { pollingInterval: 10000 }
    )

    if (isLoading || !notifications) {
      return <NotificationsListSkeleton />
    }

    return (
      <VStack
        gap="none"
        justify="start"
        className={classNames(s['notifications-list'])}
      >
        <Title className={s.title}>{'Notifications'}</Title>
        {notifications.map((notification) => {
          return (
            <NotificationCard
              key={notification.id}
              notification={notification}
            />
          )
        })}
      </VStack>
    )
  }
)
