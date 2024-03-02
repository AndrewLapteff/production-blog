import { profileReducer, fetchProfile } from 'entities/Profile'
import {
  DynamicSliceLoader,
  useThunkDispatch,
  useAppSelector
} from 'shared/lib'
import { useEffect } from 'react'
import { ProfileCard } from 'features/edit-profile/ui/profile-card/ProfileCard'
import { getUser } from 'entities/User'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'

const ProfilePage = () => {
  const dispatch = useThunkDispatch()
  const { id } = useAppSelector(getUser)

  useInitialEffect(async () => await dispatch(fetchProfile(id)), 'storybook')

  return (
    <DynamicSliceLoader
      name="profileReducer"
      reducer={profileReducer}
      removeAfterUnmount
    >
      <ProfileCard />
    </DynamicSliceLoader>
  )
}

export default ProfilePage
