import type { Meta, StoryObj } from '@storybook/react'
import { ArticleTextBlock } from './ArticleTextBlock'

const meta = {
  title: 'entities/ArticleTextBlock',
  component: ArticleTextBlock
} satisfies Meta<typeof ArticleTextBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleTextBlockLight: Story = {
  args: {}
}
