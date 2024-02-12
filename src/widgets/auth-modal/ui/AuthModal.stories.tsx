import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { Button } from 'shared/ui/button/Button'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'
import { AuthModal } from './AuthModal'

const meta: Meta<typeof AuthModal> = {
  title: 'widgets/AuthModal',
  component: AuthModal,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [RouterDecorator]
}

export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
  render: (arg) => {
    return <AuthModal width={30} isOpen={true} setOpen={() => {}} />
  }
}

export const ModalDark: Story = {
  render: (arg) => {
    return <AuthModal width={30} isOpen={true} setOpen={() => {}} />
  },
  decorators: [ThemeDecorator('dark')]
}
