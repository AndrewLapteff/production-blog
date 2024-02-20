import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'shared/Input',
  component: Input
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const InputLight: Story = {
  args: {
    value: 'Value'
  }
}

export const InputDark: Story = {
  args: {
    value: 'Value'
  },
  decorators: [ThemeDecorator('dark')]
}

export const DisabledInputLight: Story = {
  args: {
    value: 'Value',
    readonly: true
  }
}

export const DisabledInputDark: Story = {
  args: {
    value: 'Value',
    readonly: true
  },
  decorators: [ThemeDecorator('dark')]
}
