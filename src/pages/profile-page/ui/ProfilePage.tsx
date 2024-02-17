import { profileReducer } from 'entities/Profile'
import s from './ProfilePage.module.scss'
import { DynamicSliceLoader, classNames } from 'shared/lib'

const Page = () => {
  return <div className={classNames(s.profilepage)}></div>
}

const ProfilePage = () => {
  return (
    <DynamicSliceLoader
      name="profileReducer"
      reducer={profileReducer}
      removeAfterUnmount
    >
      <Page />
    </DynamicSliceLoader>
  )
}

export default ProfilePage
