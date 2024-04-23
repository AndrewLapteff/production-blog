import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropDownItem } from './Dropdown'
import LogoutIcon from 'shared/assets/icons/logout.svg'
import SettingsIcon from 'shared/assets/icons/settings.svg'

const meta = {
  title: 'shared/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const items: DropDownItem[] = [
  { content: 'Profile', href: '#', icon: SettingsIcon },
  {
    content: 'Quit',
    onClick: () => {
      console.log('hello')
    },
    icon: LogoutIcon
  }
]

export const DropdownLight: Story = {
  args: {
    title: 'Dropdown',
    items,
    label: <SettingsIcon width={23} height={23} />
  }
}
