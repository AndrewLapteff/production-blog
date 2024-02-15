import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { RouterDecorator, ThemeDecorator } from 'shared/config'
import { AppLink } from './AppLink'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [RouterDecorator],
  args: {
    children: 'Link'
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const AppLinkLight: Story = {
  args: { children: 'Link', theme: 'primary', to: '/', color: 'black' }
}

export const AppLinkDark: Story = {
  decorators: ThemeDecorator('dark')
}
