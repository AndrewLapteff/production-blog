import type { Meta, StoryObj } from '@storybook/react'
import { ThemeDecorator, StoreDecorator } from 'shared/config'
import { ProfileCard } from './ProfileCard'
import { StoreProps } from 'app/providers/store-provider/types/Schema'
import { userReducer } from 'entities/User'
import Avatar from 'shared/assets/test/avatar.png'
import { profileReducer } from '../../../edit-profile'

const initialStore: StoreProps = {
  userReducer: {
    user: {
      id: 1,
      username: '',
      email: ''
    },
    accessToken: ''
  },
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
  },
  scrollRestorationSliceReducer: {}
}

const meta: Meta<typeof ProfileCard> = {
  title: 'features/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    // @ts-expect-error
    StoreDecorator(initialStore, { userReducer, profileReducer })
  ]
}

export default meta

type Story = StoryObj<typeof meta>

export const ProfileCardLight: Story = {
  render: (arg) => {
    return <ProfileCard />
  }
}

export const ProfileCardDark: Story = {
  render: (arg) => {
    return <ProfileCard />
  },
  decorators: [ThemeDecorator('dark')]
}

export const ProfileCardLoading: Story = {
  render: (arg) => {
    return <ProfileCard />
  },
  decorators: [
    StoreDecorator(
      // @ts-expect-error
      { initialStore, profileReducer: { isLoading: true } },
      { userReducer, profileReducer }
    )
  ]
}

export const ProfileCardWithError: Story = {
  render: (arg) => {
    return <ProfileCard />
  },
  decorators: [
    StoreDecorator(
      // @ts-expect-error
      { initialStore, profileReducer: { error: true } },
      { userReducer, profileReducer }
    )
  ]
}

export const ProfileCardWithReadonlyFalse: Story = {
  render: (arg) => {
    return <ProfileCard />
  },
  decorators: [
    StoreDecorator(
      // @ts-expect-error
      { initialStore, profileReducer: { readonly: false } },
      { userReducer, profileReducer }
    )
  ]
}
