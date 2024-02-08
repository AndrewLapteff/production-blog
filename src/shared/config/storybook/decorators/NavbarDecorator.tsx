import { Story } from '@storybook/react'

export const NavbarDecorator = (Story: Story) => {
  return (
    <div>
      <div style={{ height: 50 }}></div>
      <Story />
    </div>
  )
}
