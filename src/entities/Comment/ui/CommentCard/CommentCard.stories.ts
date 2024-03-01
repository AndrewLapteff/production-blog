import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'

const meta = {
  title: 'slice/CommentCard',
  component: CommentCard
} satisfies Meta<typeof CommentCard>

export default meta
type Story = StoryObj<typeof meta>

export const CommentCardLight: Story = {
  // @ts-expect-error
  args: {}
}
