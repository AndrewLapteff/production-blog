import { profileReducer, fetchProfile } from 'entities/Profile'
import {
  DynamicSliceLoader,
  useThunkDispatch,
  useAppSelector
} from 'shared/lib'
import { useEffect } from 'react'
import { ProfileCard } from 'features/edit-profile/ui/profile-card/ProfileCard'
import { getUser } from 'entities/User'

const ProfilePage = () => {
  const dispatch = useThunkDispatch()

  const { id } = useAppSelector(getUser)

  useEffect(() => {
    if (PROJECT_ENV !== 'storybook') {
      dispatch(fetchProfile(id)).catch((err) => {
        console.log(err)
      })
    }
  }, [dispatch, id])

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
