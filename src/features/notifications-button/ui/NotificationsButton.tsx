import { memo } from 'react'
import { Button, Popover } from 'shared/ui'
import Bell from 'shared/assets/icons/bell.svg'
import Cross from 'shared/assets/icons/cross.svg'
import { NotificationsList } from 'entities/notification'

interface NotificationsButtonProps {
  profileId: number
}

// isolated feature

export const NotificationsButton = memo(
  ({ profileId }: NotificationsButtonProps) => {
    return (
      <Popover>
        <Popover.Trigger>
          <Button variant="icon">
            <Bell height={22} width={22} />
          </Button>
        </Popover.Trigger>
        <Popover.Content>
          <NotificationsList profileId={profileId} />
          <Popover.Close>
            <Button variant="icon">
              <Cross height={22} width={22} />
            </Button>
          </Popover.Close>
        </Popover.Content>
      </Popover>
    )
  }
)
