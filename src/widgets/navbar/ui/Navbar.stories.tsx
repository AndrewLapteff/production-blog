import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { Navbar } from './Navbar'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: RouterDecorator
}

export default meta
type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {}
export const NavbarDark: Story = {
  decorators: ThemeDecorator('dark')
}
