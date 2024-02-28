import type { Meta, StoryObj } from '@storybook/react'
import { Text } from './Text'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TextWhiteNormal: Story = {
  args: {
    children: "It's example of text",
    theme: 'normal'
  }
}

export const TextDarkNormal: Story = {
  args: {
    children: "It's example of text",
    theme: 'normal'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TextWhiteError: Story = {
  args: {
    children: "It's example of text",
    theme: 'error'
  }
}

export const TextDarkError: Story = {
  args: {
    children: "It's example of text",
    theme: 'error'
  },
  decorators: [ThemeDecorator('dark')]
}
