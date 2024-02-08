import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Sidebar as SidebarComponent } from './Sidebar'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { NavbarDecorator } from 'shared/config/storybook/decorators/NavbarDecorator'

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
