import {
  DynamicSliceLoader,
  useThunkDispatch,
  useAppSelector,
  useInitialEffect
} from 'shared/lib'
import { getUser } from 'entities/User'
import { useParams } from 'react-router-dom'
import { Layout } from 'shared/ui'
import {
  fetchProfile,
  ProfileCard,
  profileReducer
} from 'features/edit-profile'

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
