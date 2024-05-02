import { memo, useCallback, useState } from 'react'
import { Button, Popover } from 'shared/ui'
import Bell from 'shared/assets/icons/bell.svg'
import Cross from 'shared/assets/icons/cross.svg'
import { NotificationsList } from 'entities/notification'
import { Drawer } from 'widgets/drawer/ui/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'

interface NotificationsButtonProps {
  profileId: number
}

export const NotificationsButton = memo(
  ({ profileId }: NotificationsButtonProps) => {
    const [isOpen, setOpen] = useState(false)
    const [hasDrawerOpened, setHasDrawerOpened] = useState(false)

    const openDrawer = useCallback(() => {
      setOpen(true)
      setHasDrawerOpened(true)
    }, [])

    const triggerButton = (
      <Button onClick={openDrawer} variant="icon">
        <Bell height={22} width={22} />
      </Button>
    )

    return (
      <>
        <BrowserView>
          <Popover>
            <Popover.Trigger>{triggerButton}</Popover.Trigger>
            <Popover.Content>
              <NotificationsList profileId={profileId} />
              <Popover.Close>
                <Button variant="icon">
                  <Cross height={22} width={22} />
                </Button>
              </Popover.Close>
            </Popover.Content>
          </Popover>
        </BrowserView>
        <MobileView>
          {triggerButton}
          <Drawer isOpen={isOpen} setOpen={setOpen}>
            {(isOpen || hasDrawerOpened) && (
              <NotificationsList profileId={profileId} />
            )}
          </Drawer>
        </MobileView>
      </>
    )
  }
)
