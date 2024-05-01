import s from '../nofifications-list/NotificationsList.module.scss'
import { classNames } from 'shared/lib'
import { Title, VStack } from 'shared/ui'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'

export const NotificationsListSkeleton = () => {
  return (
    <VStack
      gap="medium"
      justify="start"
      className={classNames(s['notifications-list'])}
    >
      <Title className={s.title}>{'Notifications'}</Title>
      <Skeleton width={'calc(100% - 20px)'} height={100} />
      <Skeleton width={'calc(100% - 20px)'} height={100} />
      <Skeleton width={'calc(100% - 20px)'} height={100} />
      <Skeleton width={'calc(100% - 20px)'} height={100} />
      <Skeleton width={'calc(100% - 20px)'} height={100} />
    </VStack>
  )
}
