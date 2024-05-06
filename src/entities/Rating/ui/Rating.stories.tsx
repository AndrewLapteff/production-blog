import type { Meta, StoryObj } from '@storybook/react'
import { Rating } from './Rating'

const meta: Meta<typeof Rating> = {
  title: 'entities/Rating',
  component: Rating,
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const RatingLight: Story = {
  args: {
    size: 40,
    stars: 5,
    title: 'Rate this article',
    hasFeedback: true,
    feedbachTitle: 'Feedback',
    onCancel: () => {
      console.log('cancel')
    },
    onAccept: (star: number) => {
      console.log(star)
    },
    rate: 0
  }
}
