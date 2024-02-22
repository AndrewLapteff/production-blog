import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator, StoreDecorator, RouterDecorator } from 'shared/config'
import AuthModal from './AuthModal'
import { userReducer } from 'entities/User'

const store = {
  loginReducer: {
    username: '',
    password: '',
    email: '',
    isLoading: false,
    error: undefined
  },
  userReducer: {
    user: {
      id: 1,
      username: '',
      email: ''
    },
    accessToken: ''
  }
}

const meta: Meta<typeof AuthModal> = {
  title: 'widgets/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [StoreDecorator(store, { userReducer }), RouterDecorator]
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
