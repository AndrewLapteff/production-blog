import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator, testStore } from 'shared/config'
import { userReducer } from 'entities/User'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator(testStore, { userReducer })]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const ProfilePageLight: Story = {
  args: {}
}
