import type { Meta, StoryObj } from '@storybook/react'
import { Select } from './Select'

const meta = {
  title: 'shared/Select',
  component: Select
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const InputLight: Story = {
  args: {
    label: 'Select',
    options: [
      { content: 'React', value: 'react' },
      { content: 'Redux', value: 'redux' },
      { content: 'Next', value: 'next' }
    ]
  }
}
