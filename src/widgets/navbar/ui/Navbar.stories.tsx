import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator, RouterDecorator, StoreDecorator } from 'shared/config'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [StoreDecorator, RouterDecorator]
}

export default meta
type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {}
export const NavbarDark: Story = {
  decorators: ThemeDecorator('dark')
}
