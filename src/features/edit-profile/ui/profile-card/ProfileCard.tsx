import { useSelector } from 'react-redux'
import s from './ProfileCard.module.scss'
import {
  classNames,
  useDispatchCallback,
  useDispatchCallbackWithArgs,
  useThunkDispatch
} from 'shared/lib'
import { getProfile } from '../../../../entities/Profile/model/selectors/get-profile/getProfile'
import { getError } from '../../../../entities/Profile/model/selectors/get-error/getError'
import { getIsLoading } from '../../../../entities/Profile/model/selectors/get-is-loading/getIsLoading'
import { Button, Loader, Option, Select, Text } from 'shared/ui'
import { getIsReadonly } from '../../../../entities/Profile/model/selectors/get-is-readonly/getIsReadonly'
import {
  setAge,
  setBio,
  setReadonly,
  setUsername
} from '../../../../entities/Profile/model/slice/profileSlice'
import { useTranslation } from 'react-i18next'
import { postProfile } from '../../../../entities/Profile/model/service/postProfile/updateProfile'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { useMemo } from 'react'
import { countries } from 'shared/consts/countries'
import { ProfileInput } from '../profile-input/ProfileInput'

export const ProfileCard = () => {
  const { t } = useTranslation('profile')
  const dispatch = useThunkDispatch()

  const profile = useSelector(getProfile)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)
  const isReadonly = useSelector(getIsReadonly)

  const onChangeUsername = useDispatchCallback(setUsername)
  const onChangeAge = useDispatchCallback(setAge)
  const onChangeBio = useDispatchCallback(setBio)

  const onEdit = useDispatchCallbackWithArgs(setReadonly(false))
  const onCancel = useDispatchCallbackWithArgs(setReadonly(true))

  const onConfirm = () => {
    dispatch(postProfile())
  }
  const options: Option[] = useMemo(
    () =>
      countries.map((country) => {
        return { content: country.name, value: country.name }
      }),
    []
  )

  if (error) {
    return (
      <div className={classNames(s.wrapper)}>
        <Text title="Smth went wrong" text="Try again later" align="center" />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={classNames(s.wrapper)}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={classNames(s.wrapper)}>
      <Text title={t('profile')} />
      <Avatar alt="Avatar" src={profile?.avatar} />
      <div className={classNames(s.card)}>
        <ProfileInput
          name="username"
          onChange={onChangeUsername}
          value={profile?.username}
          isReadonly={isReadonly}
        />
        <ProfileInput
          name="age"
          onChange={onChangeAge}
          value={profile?.age}
          isReadonly={isReadonly}
          type="number"
        />
        <ProfileInput
          name="bio"
          onChange={onChangeBio}
          value={profile?.bio}
          isReadonly={isReadonly}
        />
        <div
          style={{ marginTop: '5px' }}
          className={classNames(s['field-wrapper'])}
        >
          <Text text={t('country')} />
          <Select readonly={isReadonly} options={options} />
        </div>
        <div className={s.controls}>
          {isReadonly ? (
            <Button variant="outline" onClick={onEdit}>
              {t('edit')}
            </Button>
          ) : (
            <Button variant="red" onClick={onCancel}>
              {t('cancel')}
            </Button>
          )}
          {!isReadonly && (
            <Button disabled={isReadonly} onClick={onConfirm}>
              {t('confirm')}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
