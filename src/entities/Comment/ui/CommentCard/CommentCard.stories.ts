import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'entities/CommentCard',
  component: CommentCard
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

const profile = {
  id: 1,
  userId: 1,
  username: 'Amigooo',
  avatar: 'https://avatars.githubusercontent.com/u/114949478?v=4',
  country: 'Ukraine',
  age: 18,
  bio: "Hello world, that's it!"
}

const comment = {
  id: 1,
  text: 'a comment about post 1',
  articleId: 1,
  profileId: 1,
  createdAt: '01.01.2024',
  profile
}

export const CommentCardLight: Story = {
  args: {
    comment
  }
}

export const CommentCardDark: Story = {
  args: {
    comment
  },
  decorators: ThemeDecorator('dark')
}
