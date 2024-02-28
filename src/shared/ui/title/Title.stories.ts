import type { Meta, StoryObj } from '@storybook/react'
import { Title } from './Title'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'shared/Title',
  component: Title
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const TitleLight: Story = {
  args: {
    children: 'Title'
  }
}

export const TitleDark: Story = {
  args: {
    children: 'Title'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TitleH1: Story = {
  args: {
    children: 'Title',
    h: 'h1'
  }
}

export const TitleH2: Story = {
  args: {
    children: 'Title',
    h: 'h2'
  }
}

export const TitleH3: Story = {
  args: {
    children: 'Title',
    h: 'h3'
  }
}

export const TitleError: Story = {
  args: {
    children: 'Title',
    theme: 'error'
  }
}
