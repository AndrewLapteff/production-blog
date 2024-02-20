import { profileReducer, fetchProfile } from 'entities/Profile'
import {
  DynamicSliceLoader,
  useThunkDispatch,
  useAppSelector
} from 'shared/lib'
import { useEffect } from 'react'
import { ProfileCard } from 'features/edit-profile/ui/profile-card/ProfileCard'
import { getUsername } from 'features/auth-by-username/model/selectors'

const ProfilePage = () => {
  const dispatch = useThunkDispatch()

  const username = useAppSelector(getUsername)

  useEffect(() => {
    dispatch(fetchProfile(username))
  }, [dispatch, username])

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
