import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'entities/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>

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

const comments = [
  {
    id: 1,
    text: 'a comment about post 1',
    articleId: 1,
    profileId: 1,
    createdAt: '01.01.2024',
    profile
  },
  {
    articleId: 1,
    profileId: 2,
    createdAt: '05.02.2024',
    text: 'Hello guys\n',
    id: 2,
    profile
  },
  {
    articleId: 1,
    profileId: 1,
    createdAt: '05.02.2024',
    text: 'Tooooo',
    id: 3,
    profile
  }
]

export const CommentListLight: Story = {
  args: {
    comments,
    isLoading: false
  }
}

export const CommentListDark: Story = {
  args: {
    comments,
    isLoading: false
  },
  decorators: ThemeDecorator('dark')
}

export const CommentListLoading: Story = {
  args: {
    comments,
    isLoading: true
  }
}
