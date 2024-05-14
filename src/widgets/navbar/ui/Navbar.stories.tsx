import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator, StoreDecorator } from 'shared/config'
import { Navbar } from './Navbar'
import { getTestStore } from 'shared/lib'

const loginReducer = {
  username: '',
  password: '',
  email: '',
  isLoading: false,
  error: undefined
}

const user = {
  username: 'test',
  email: '',
  id: 1
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

export const NavbarLight: Story = {
  args: {
    user
  }
}
export const NavbarDark: Story = {
  decorators: ThemeDecorator('dark'),
  args: {
    user
  }
}
// export const NavbarNotAuthed: Story = {
//   decorators: StoreDecorator(
//     { ...store, userReducer: { user: undefined } },
//     { userReducer }
//   )
// }
