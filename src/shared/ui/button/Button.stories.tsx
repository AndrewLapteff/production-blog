import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import 'app/styles/index.scss'
import MoonIcon from 'shared/assets/moon.svg'

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Hello World'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Hello World'
  }
}

export const Icon: Story = {
  args: {
    variant: 'icon',
    children: <MoonIcon width={25} height={25} />
  }
}
// Outline.decorators = []
// export const Secondary: Story = {
//   args: {
//     label: 'Button'
//   }
// }

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button'
//   }
// }

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button'
//   }
// }
