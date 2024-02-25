import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const SkeletonLight: Story = {
  args: {
    height: 20,
    width: 100
  }
}
