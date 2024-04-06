import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCodeBlock } from './ArticleCodeBlock'

const meta = {
  title: 'entities/ArticleCodeBlock',
  parameters: {
    layout: 'centered'
  },
  component: ArticleCodeBlock
} satisfies Meta<typeof ArticleCodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleCodeBlockLight: Story = {
  args: {
    block: {
      code: [
        `import type { Meta, StoryObj } from '@storybook/react'
import { ArticleCodeBlock } from './ArticleCodeBlock'

const meta = {
  title: 'entities/ArticleCodeBlock',
  component: ArticleCodeBlock
} satisfies Meta<typeof ArticleCodeBlock>

export default meta
type Story = StoryObj<typeof meta>

export const ArticleCodeBlockLight: Story = {
  args: {
    block: 
  }
}
      `
      ],
      id: 1,
      type: 'code',
      title: 'Stories code example'
    }
  }
}
