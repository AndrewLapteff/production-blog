import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { StoreDecorator, testStore } from 'shared/config'
import Avatar from 'shared/assets/test/avatar.png'
import { scrollRestorationSliceReducer } from 'features/scroll-restoration'
import { userReducer } from 'entities/User'
import { profileReducer } from 'features/edit-profile'

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [
    StoreDecorator(
      {
        ...testStore,
        profileReducer: {
          profile: {
            id: 1,
            age: 18,
            avatar: Avatar,
            bio: 'Hey',
            country: 'Ukraine',
            username: 'Amigo'
          },
          isLoading: false,
          readonly: true,
          error: undefined
        }
      },
      // @ts-expect-error
      { scrollRestorationSliceReducer, userReducer, profileReducer }
    )
  ]
} satisfies Meta<typeof ProfilePage>

export default meta
type Story = StoryObj<typeof meta>

export const ProfilePageLight: Story = {
  args: {}
}
