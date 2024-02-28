import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
  title: 'shared/Code',
  component: Code
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const CodeLight: Story = {
  args: {
    code: `import type { Meta, StoryObj } from '@storybook/react'
import { Code } from './Code'

const meta = {
  title: 'slice/Code',
  component: Code
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const CodeLight: Story = {
  args: {
    code: ''
  }
}
`
  }
}
