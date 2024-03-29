import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import MoonIcon from 'shared/assets/icons/moon.svg'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    size: 'l',
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Medium: Story = {
  args: {
    size: 'm',
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Small: Story = {
  args: {
    size: 's',
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Primary: Story = {
  args: {
    size: 'm',
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Outline: Story = {
  args: {
    size: 'm',
    variant: 'outline',
    children: 'Hello World'
  }
}

export const Icon: Story = {
  args: {
    size: 'm',
    variant: 'icon',
    children: <MoonIcon width={25} height={25} />
  }
}

export const Background: Story = {
  args: {
    size: 'm',
    variant: 'background',
    children: <MoonIcon width={25} height={25} />
  }
}

export const Disabled: Story = {
  args: {
    disabled: true,
    size: 'm',
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Red: Story = {
  args: {
    size: 'm',
    variant: 'red',
    children: 'Hello World'
  }
}
