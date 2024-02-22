import { fetchProfile } from '../service/fetchProfile/fetchProfile'
import { postProfile } from '../service/postProfile/updateProfile'
import { Profile, ProfileSchema } from '../types/profile'
import {
  profileReducer,
  setAge,
  setAvatar,
  setBio,
  setCountry,
  setProfile,
  setReadonly,
  setUsername
} from './profileSlice'

const emptyState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  readonly: false
}

const profile = {
  username: '',
  avatar: '',
  country: '',
  age: 0,
  bio: ''
}

const filledState: ProfileSchema = {
  isLoading: false,
  error: undefined,
  readonly: false,
  profile
}

describe('userSlice.test.ts reducers', () => {
  it('should change profile value', () => {
    const payload: Profile = {
      username: 'Amigo',
      avatar: 'https://avatars.githubusercontent.com/u/114949478?v=4',
      country: 'USA',
      age: 18,
      bio: "Hello world, that's it!"
    }
    expect(profileReducer(emptyState, setProfile(payload)).profile).toEqual(
      payload
    )
  })

  it('should change the readonly value', () => {
    expect(profileReducer(emptyState, setReadonly(true)).readonly).toBe(true)
  })

  it('should change the value of username', () => {
    const username = 'Amigo'
    expect(
      profileReducer(filledState, setUsername(username)).profile?.username
    ).toBe(username)
  })

  it('should change the value of age', () => {
    const age = 18
    expect(profileReducer(filledState, setAge(age)).profile?.age).toBe(age)
  })

  it('should change the value of avatar', () => {
    const avatar = 'link'
    expect(profileReducer(filledState, setAvatar(avatar)).profile?.avatar).toBe(
      avatar
    )
  })

  it('should change the value of bio', () => {
    const bio = 'Hello fellas'
    expect(profileReducer(filledState, setBio(bio)).profile?.bio).toBe(bio)
  })

  it('should change the value of country', () => {
    const country = 'Ukraine'
    expect(
      profileReducer(filledState, setCountry(country)).profile?.country
    ).toBe(country)
  })

  it('should return undefined', () => {
    expect(
      profileReducer(emptyState, setCountry('Ukraine')).profile?.country
    ).toBe(undefined)
  })
})

describe('userSlice.test.ts extra reducers', () => {
  it('should change profile value', () => {
    expect(
      profileReducer(emptyState, fetchProfile.fulfilled(profile, '', '', ''))
    ).toEqual({ ...filledState, backupProfile: profile })
  })
  it('should change profile value', () => {
    expect(
      profileReducer(emptyState, fetchProfile.pending('', '', ''))
    ).toEqual({ ...emptyState, isLoading: true })
  })
  it('should change profile value', () => {
    expect(
      // @ts-expect-error
      profileReducer(emptyState, postProfile.fulfilled(profile, '', '', ''))
    ).toEqual({ ...filledState, backupProfile: profile })
  })
  it('should change profile value', () => {
    // @ts-expect-error
    expect(profileReducer(emptyState, postProfile.pending('', '', ''))).toEqual(
      { ...emptyState, isLoading: true }
    )
  })
})
