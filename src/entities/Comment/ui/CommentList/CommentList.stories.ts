import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from './CommentList'

const meta = {
  title: 'slice/CommentList',
  component: CommentList
} satisfies Meta<typeof CommentList>

export default meta
type Story = StoryObj<typeof meta>

export const CommentListLight: Story = {
  // @ts-expect-error
  args: {}
}
