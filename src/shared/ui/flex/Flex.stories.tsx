import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './Flex'

const meta = {
  title: 'shared/Flex',
  component: Flex,
  args: {
    children: (
      <>
        <div>one</div>
        <div>two</div>
        <div>three</div>
        <div>four</div>
      </>
    )
  }
} satisfies Meta<typeof Flex>

export default meta
type Story = StoryObj<typeof meta>

export const FlexCentered: Story = {
  args: {
    align: 'center',
    direction: 'column',
    gap: 'medium',
    justify: 'center'
  }
}
