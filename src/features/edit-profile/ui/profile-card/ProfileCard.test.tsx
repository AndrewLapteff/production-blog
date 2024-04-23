import { screen } from '@testing-library/react'
import { ProfileCard } from './ProfileCard'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib'
import { StoreProps, StoreProvider } from 'app/providers/store-provider'
import { userReducer } from 'entities/User'
import { scrollRestorationSliceReducer } from 'features/scroll-restoration'
import { Profile, ProfileSchema } from 'entities/Profile'
import { Reducer, UnknownAction } from '@reduxjs/toolkit'
import userEvent from '@testing-library/user-event'
import { profileReducer } from '../../model/slice/profileSlice'

// jest.mock('../../../../shared/api/rtkQuery', () => ({
//   rtkApi: jest.fn()
// }))

const profile: Profile = {
  id: 1,
  userId: 1,
  username: 'Amigo',
  avatar: 'https://avatars.githubusercontent.com/u/114949478?v=4',
  country: 'Latvia',
  age: 18,
  bio: "Hello world, that's it!"
}

const initialStore: StoreProps = {
  userReducer: {
    user: {
      id: 1,
      username: 'Amigo',
      email: 'this.is.amigogo@gmail.com'
    },
    accessToken: ''
  },
  profileReducer: {
    isLoading: false,
    error: undefined,
    readonly: true,
    backupProfile: profile,
    profile
  },
  scrollRestorationSliceReducer: {}
}

describe('ProfileCard.tsx', () => {
  it('Should allow to edit value', async () => {
    const ProfileCardTest = withTranslation('translation')(ProfileCard)
    renderWithTranslation(
      <StoreProvider
        initialState={initialStore}
        asyncReducers={{
          userReducer,
          scrollRestorationSliceReducer,
          profileReducer: profileReducer as Reducer<
            ProfileSchema | undefined,
            UnknownAction
          >
        }}
      >
        <ProfileCardTest />
      </StoreProvider>
    )

    const user = userEvent.setup()
    const newUsername = 'anewusername'

    const editButton = screen.getByTestId('ProfileCard.edit.button')
    await user.click(editButton)

    const confirmButton = screen.getByTestId('ProfileCard.confirm.button')
    expect(confirmButton).toBeInTheDocument()

    const usernameInput = screen.getByTestId('ProfileCard.username.input')
    await user.clear(usernameInput)
    await user.type(usernameInput, newUsername)

    expect(usernameInput).toHaveValue(newUsername)
  })

  it('Should show a cancel button', async () => {
    const ProfileCardTest = withTranslation('translation')(ProfileCard)
    renderWithTranslation(
      <StoreProvider
        initialState={initialStore}
        asyncReducers={{
          userReducer,
          scrollRestorationSliceReducer,
          profileReducer: profileReducer as Reducer<
            ProfileSchema | undefined,
            UnknownAction
          >
        }}
      >
        <ProfileCardTest />
      </StoreProvider>
    )

    const user = userEvent.setup()

    const editButton = screen.getByTestId('ProfileCard.edit.button')
    await user.click(editButton)

    const cancelButton = screen.getByTestId('ProfileCard.cancel.button')
    expect(cancelButton).toBeInTheDocument()
  })
})
