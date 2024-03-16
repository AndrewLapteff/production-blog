import { profileReducer, fetchProfile } from 'entities/Profile'
import {
  DynamicSliceLoader,
  useThunkDispatch,
  useAppSelector
} from 'shared/lib'
import { ProfileCard } from 'features/edit-profile/ui/profile-card/ProfileCard'
import { getUser } from 'entities/User'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { useParams } from 'react-router-dom'
import { Layout } from 'shared/ui'

const ProfilePage = () => {
  const dispatch = useThunkDispatch()
  const { id: profileId } = useParams<string>()
  const { id } = useAppSelector(getUser)

  useInitialEffect(
    async () => await dispatch(fetchProfile(profileId || id)),
    'storybook'
  )

  return (
    <DynamicSliceLoader
      name="profileReducer"
      reducer={profileReducer}
      removeAfterUnmount
    >
      <Layout>
        <ProfileCard />
      </Layout>
    </DynamicSliceLoader>
  )
}

export default ProfilePage
