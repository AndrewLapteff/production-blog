import type { Meta, StoryObj } from '@storybook/react'
import { RatingStars } from './RatingStars'

const meta = {
  title: 'shared/RatingStars',
  component: RatingStars
} satisfies Meta<typeof RatingStars>

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
