import { useSelector } from 'react-redux'
import s from './ProfileCard.module.scss'
import {
  classNames,
  useDispatchCallback,
  useDispatchCallbackWithArgs,
  useThunkDispatch
} from 'shared/lib'
import { getProfile } from '../model/selectors/get-profile/getProfile'
import { getError } from '../model/selectors/get-error/getError'
import { getIsLoading } from '../model/selectors/get-is-loading/getIsLoading'
import { Button, Input, Loader, Text } from 'shared/ui'
import { getIsReadonly } from '../model/selectors/get-is-readonly/getIsReadonly'
import {
  setAge,
  setBio,
  setReadonly,
  setUsername
} from '../model/slice/profileSlice'
import { useTranslation } from 'react-i18next'
import { postProfile } from '../model/service/postProfile/updateProfile'

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
      <div className={classNames(s.card)}>
        <div className={classNames(s['field-wrapper'])}>
          <Text text={t('name')} />
          <Input
            value={profile?.username || ''}
            onChange={onChangeUsername}
            readonly={isReadonly}
          />
        </div>
        <div className={classNames(s['field-wrapper'])}>
          <Text text={t('age')} />
          <Input
            type="number"
            value={profile?.age || ''}
            onChange={onChangeAge}
            readonly={isReadonly}
          />
        </div>
        <div className={classNames(s['field-wrapper'])}>
          <Text text={t('bio')} />
          <Input
            value={profile?.bio || ''}
            onChange={onChangeBio}
            readonly={isReadonly}
          />
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
