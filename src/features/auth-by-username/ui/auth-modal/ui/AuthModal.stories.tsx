import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { ThemeDecorator, StoreDecorator } from 'shared/config'
import { AuthModal } from './AuthModal'

const meta: Meta<typeof AuthModal> = {
  title: 'widgets/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [StoreDecorator]
}

export default meta

type Story = StoryObj<typeof meta>

export const AuthModalLight: Story = {
  render: (arg) => {
    return <AuthModal width={30} isOpen={true} setOpen={() => {}} />
  }
}

export const AuthModalDark: Story = {
  render: (arg) => {
    return <AuthModal width={30} isOpen={true} setOpen={() => {}} />
  },
  decorators: [ThemeDecorator('dark')]
}
