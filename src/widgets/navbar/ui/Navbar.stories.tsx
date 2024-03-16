import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator, StoreDecorator } from 'shared/config'
import { Navbar } from './Navbar'
import { userReducer } from 'entities/User'
import { getTestStore } from 'shared/lib'

const loginReducer = {
  username: '',
  password: '',
  email: '',
  isLoading: false,
  error: undefined
}

const store = getTestStore({ loginReducer })

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [StoreDecorator(store)]
}

export default meta
type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {}
export const NavbarDark: Story = {
  decorators: ThemeDecorator('dark')
}
// export const NavbarNotAuthed: Story = {
//   decorators: StoreDecorator(
//     { ...store, userReducer: { user: undefined } },
//     { userReducer }
//   )
// }
