import type { Meta, StoryObj } from '@storybook/react'
import { ArticleImageBlock } from './ArticleImageBlock'

const meta = {
  title: 'entities/ArticleImageBlock',
  component: ArticleImageBlock
} satisfies Meta<typeof ArticleImageBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleImageBlockLight: Story = {
  args: {}
}
