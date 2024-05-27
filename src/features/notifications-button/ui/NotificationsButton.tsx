import { memo } from 'react'
import { Button, Popover } from 'shared/ui'
import Bell from 'shared/assets/icons/bell.svg'
import Cross from 'shared/assets/icons/cross.svg'
import { NotificationsList } from 'entities/notification'
import { Drawer } from 'widgets/drawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { AnimationProvider } from 'shared/lib/components/animation-provider/AnimationProvicer'
import { useDrawer } from 'shared/lib'

interface NotificationsButtonProps {
  profileId: number
}

export const NotificationsButton = memo(
  ({ profileId }: NotificationsButtonProps) => {
    const { drawerRef, isDrawerOpen, openDrawer } = useDrawer()

    const triggerButton = (
      <Button data-testid="notification" onClick={openDrawer} variant="icon">
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
                <Button data-testid="notification-close" variant="icon">
                  <Cross height={22} width={22} />
                </Button>
              </Popover.Close>
            </Popover.Content>
          </Popover>
        </BrowserView>
        <MobileView>
          {triggerButton}
          <AnimationProvider>
            <Drawer ref={drawerRef}>
              {isDrawerOpen && <NotificationsList profileId={profileId} />}
            </Drawer>
          </AnimationProvider>
        </MobileView>
      </>
    )
  }
)
