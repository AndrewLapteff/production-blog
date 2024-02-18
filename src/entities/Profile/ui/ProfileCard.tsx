import { useSelector } from 'react-redux'
import s from './ProfileCard.module.scss'
import { classNames } from 'shared/lib'
import { getProfile } from '../model/selectors/get-profile/getProfile'
import { getError } from '../model/selectors/get-error/getError'
import { getIsLoading } from '../model/selectors/get-is-loading/getIsLoading'
import { Input, Text } from 'shared/ui'

export const ProfileCard = () => {
  const profile = useSelector(getProfile)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  return (
    <div className={classNames(s.wrapper)}>
      <Text title="Profile" />
      <div className={classNames(s.card)}>
        <div className={classNames(s['field-wrapper'])}>
          <Text text="Name:" />
          <Input value={profile?.username || ''} onChange={() => {}} />
        </div>
        <div className={classNames(s['field-wrapper'])}>
          <Text text="Age:" />
          <Input value={profile?.age || ''} onChange={() => {}} />
        </div>
        <div className={classNames(s['field-wrapper'])}>
          <Text text="Bio:" />
          <Input value={profile?.bio || ''} onChange={() => {}} />
        </div>
      </div>
    </div>
  )
}
