import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator } from 'shared/config'
import { Drawer } from './Drawer'
import { Button } from 'shared/ui/button/Button'
import { useRef } from 'react'

const meta: Meta<typeof Drawer> = {
  title: 'widgets/Drawer',
  component: Drawer,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const DrawerLight: Story = {
  render: (arg) => {
    const ref = useRef(null)

    return (
      <Drawer ref={ref}>
        <Button size="m" variant="primary">
          Yes
        </Button>
        <Button size="m" variant="primary">
          No
        </Button>
      </Drawer>
    )
  }
}

export const DrawerDark: Story = {
  render: (arg) => {
    const ref = useRef(null)

    return (
      <Drawer ref={ref}>
        <div>hello</div>
      </Drawer>
    )
  },
  decorators: [ThemeDecorator('dark')]
}
