import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlock } from './ArticleImageBlock'
import { ArticleDecorator } from 'shared/config/storybook/decorators/ArticleDecorator'

const meta = {
  title: 'entities/ArticleImageBlock',
  parameters: {
    layout: 'centered'
  },
  component: ArticleImageBlock,
  decorators: [ArticleDecorator]
} satisfies Meta<typeof ArticleImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleImageBlockLight: Story = {
  args: {
    block: {
      id: 0,
      type: 'image',
      title: 'Complete Guide of New JavaScript Features from ECMAScript 2023',
      alt: 'Photo by Joan Gamell on Unsplash',
      label: 'Photo by Joan Gamell on Unsplash',
      url: 'https://www.tutorialrepublic.com/lib/images/javascript-illustration.png'
    }
  }
}
