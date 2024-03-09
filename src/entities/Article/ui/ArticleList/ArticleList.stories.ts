import type { Meta, StoryObj } from '@storybook/react'
import { ArticleList } from './ArticleList'

const meta = {
  title: 'slice/ArticleList',
  component: ArticleList
} satisfies Meta<typeof ArticleList>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleListLight: Story = {
  // @ts-expect-error
  args: {}
}
