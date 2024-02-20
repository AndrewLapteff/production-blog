import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { Text } from './Text'
import { ThemeDecorator } from 'shared/config'

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const TitleAndTextWhiteNormal: Story = {
  args: {
    title: 'Title',
    text: "It's example of text",
    theme: 'normal'
  }
}

export const TitleAndTextDarkNormal: Story = {
  args: {
    title: 'Title',
    text: "It's example of text",
    theme: 'normal'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TextWhiteNormal: Story = {
  args: {
    text: "It's example of text",
    theme: 'normal'
  }
}

export const TextDarkNormal: Story = {
  args: {
    text: "It's example of text",
    theme: 'normal'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TitleWhiteNormal: Story = {
  args: {
    title: 'Title',
    theme: 'normal'
  }
}
export const TitleDarkNormal: Story = {
  args: {
    title: 'Title',
    theme: 'normal'
  },
  decorators: [ThemeDecorator('dark')]
}

// Errors
export const TitleAndTextWhiteError: Story = {
  args: {
    title: 'Title',
    text: "It's example of text",
    theme: 'error'
  }
}

export const TitleAndTextDarkError: Story = {
  args: {
    title: 'Title',
    text: "It's example of text",
    theme: 'error'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TextWhiteError: Story = {
  args: {
    text: "It's example of text",
    theme: 'error'
  }
}

export const TextDarkError: Story = {
  args: {
    text: "It's example of text",
    theme: 'error'
  },
  decorators: [ThemeDecorator('dark')]
}

export const TitleWhiteError: Story = {
  args: {
    title: 'Title',
    theme: 'error'
  }
}
export const TitleDarkError: Story = {
  args: {
    title: 'Title',
    theme: 'error'
  },
  decorators: [ThemeDecorator('dark')]
}
export const TitleAndTextLeft: Story = {
  args: {
    title: 'Title',
    text: 'text',
    theme: 'normal',
    align: 'left'
  }
}
export const TitleAndTextRight: Story = {
  args: {
    title: 'Title',
    text: 'text',
    theme: 'normal',
    align: 'right'
  }
}
export const TitleAndTextCentert: Story = {
  args: {
    title: 'Title',
    text: 'text',
    theme: 'normal',
    align: 'center'
  }
}
