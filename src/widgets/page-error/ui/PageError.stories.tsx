import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import { RouterDecorator } from 'shared/config/storybook/decorators/RouterDecorator'
import { PageError } from './PageError'
import { Sidebar } from 'widgets/sidebar/ui/Sidebar'
import { Navbar } from 'widgets/navbar'
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator'

const meta: Meta<typeof PageError> = {
  title: 'widgets/PageError',
  component: PageError,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [RouterDecorator]
}

export default meta
type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
  render: (arg) => {
    return (
      <div>
        <Navbar />
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
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <PageError />
        </div>
      </div>
    )
  }
}
