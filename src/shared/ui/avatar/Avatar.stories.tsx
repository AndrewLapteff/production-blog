import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'
import Image from 'shared/assets/test/avatar.png'

const meta = {
  title: 'shared/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarDefaultSize: Story = {
  args: {
    alt: 'Test image',
    src: Image
  }
}

export const AvatarWithOutline: Story = {
  args: {
    outline: true,
    alt: 'Test image',
    src: Image
  }
}

export const AvatarSmallSize: Story = {
  args: {
    size: 50,
    alt: 'Test image',
    src: Image
  }
}
