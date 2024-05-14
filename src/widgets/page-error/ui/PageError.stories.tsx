import type { Meta, StoryObj } from '@storybook/react'
import { StoreDecorator, ThemeDecorator } from 'shared/config'
import { PageError } from './PageError'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { Navbar } from 'widgets/navbar'
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

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [StoreDecorator(store)]
}

export default meta
type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
  render: (arg) => {
    return (
      <div>
        <Navbar user={user} />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <PageError />
        </div>
      </div>
    )
  }
}

export const PageErrorDark: Story = {
  decorators: ThemeDecorator('dark'),
  render: (arg) => {
    return (
      <div>
        <Navbar user={user} />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <PageError />
        </div>
      </div>
    )
  }
}
