import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar as SidebarComponent } from './Sidebar'
import { ThemeDecorator, NavbarDecorator } from 'shared/config'

const meta: Meta<typeof SidebarComponent> = {
  title: 'widgets/Sidebar',
  component: SidebarComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: NavbarDecorator
}

export default meta
type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {}
export const SidebarDark: Story = {
  decorators: ThemeDecorator('dark')
}
