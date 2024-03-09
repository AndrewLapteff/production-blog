import type { Meta, StoryObj } from '@storybook/react'
import { ArticleListItem } from './ArticleListItem'

const meta = {
  title: 'slice/ArticleListItem',
  component: ArticleListItem
} satisfies Meta<typeof ArticleListItem>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleListItemLight: Story = {
  args: {}
}
