import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta = {
  title: 'shared/Rating',
  component: Rating
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const LargeRating: Story = {
  args: {
    size: 50,
    stars: 3
  }
}

export const MediumRating: Story = {
  args: {
    size: 30,
    stars: 5
  }
}
