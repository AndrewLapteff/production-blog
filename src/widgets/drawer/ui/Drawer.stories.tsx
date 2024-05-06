import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config'
import { Drawer } from './Drawer'
import { Button } from 'shared/ui/button/Button'
import { useDrawer } from 'shared/lib'
import { AnimationProvider } from 'shared/lib/components/animation-provider/AnimationProvicer'
import { HStack } from 'shared/ui'

const meta: Meta<typeof Drawer> = {
  title: 'widgets/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof meta>

function DrawerExample() {
  const { drawerRef, openDrawer } = useDrawer()

  return (
    <>
      <Button size="m" variant="primary" onClick={openDrawer}>
        Open the drawer
      </Button>
      <AnimationProvider>
        <Drawer ref={drawerRef}>
          <HStack gap="medium" max justify="center">
            <Button size="m" variant="primary">
              Yes
            </Button>
            <Button size="m" variant="primary">
              No
            </Button>
          </HStack>
        </Drawer>
      </AnimationProvider>
    </>
  )
}

export const DrawerLight: Story = {
  render: () => DrawerExample()
}

export const DrawerDark: Story = {
  render: () => DrawerExample(),
  decorators: [ThemeDecorator('dark')]
}
