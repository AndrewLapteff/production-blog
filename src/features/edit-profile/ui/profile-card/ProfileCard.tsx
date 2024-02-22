import { useSelector } from 'react-redux'
import s from './ProfileCard.module.scss'
import {
  classNames,
  useDispatchCallback,
  useDispatchCallbackWithArgs,
  useThunkDispatch
} from 'shared/lib'
import { Loader, Option, Select, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { postProfile } from '../../../../entities/Profile/model/service/postProfile/updateProfile'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { memo, useCallback, useMemo } from 'react'
import { countries } from 'shared/consts/countries'
import { ProfileInput } from '../profile-input/ProfileInput'
import { Controls } from '../controls/Controls'
import {
  getError,
  getProfile,
  getIsLoading,
  getIsReadonly,
  setAge,
  setBio,
  setCountry,
  setReadonly,
  setUsername,
  getValidationErrors
} from 'entities/Profile'
import { PROFILE_VALIDATION } from 'entities/Profile/model/types/validation'

export const ProfileCard = memo(() => {
  const { t } = useTranslation('profile')
  const dispatch = useThunkDispatch()

  const profile = useSelector(getProfile)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)
  const isReadonly = useSelector(getIsReadonly)
  const errors = useSelector(getValidationErrors)

  const onChangeUsername = useDispatchCallback(setUsername)
  const onChangeAge = useDispatchCallback(setAge)
  const onChangeBio = useDispatchCallback(setBio)
  const onSelectCountry = useDispatchCallback(setCountry)

  const onEdit = useDispatchCallbackWithArgs(setReadonly(false))
  const onCancel = useDispatchCallbackWithArgs(setReadonly(true))

  const onConfirm = useCallback(() => {
    // here
    dispatch(postProfile())
  }, [dispatch])

  const validationMapper = {
    [PROFILE_VALIDATION.NO_AGE]: t('age-is-not-specified'),
    [PROFILE_VALIDATION.NO_AVATAR]: t('avatar-is-not-specified'),
    [PROFILE_VALIDATION.NO_COUNTRY]: t('country-is-not-specified'),
    [PROFILE_VALIDATION.NO_DATA]: t('no-profile-data-passed'),
    [PROFILE_VALIDATION.NO_USERNAME]: t('username-is-not-specified'),
    [PROFILE_VALIDATION.SERVER_ERROR]: t('server-error'),
    [PROFILE_VALIDATION.TOO_BIG_AGE]: t('the-value-of-age-is-too-great'),
    [PROFILE_VALIDATION.TOO_LONG_BIO]: t('bio-info-is-too-long'),
    [PROFILE_VALIDATION.TOO_SHORT_USERNAME]: t('username-is-too-short')
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
          <Select
            onSelect={onSelectCountry}
            readonly={isReadonly}
            options={options}
            currentCountry={profile?.country}
          />
        </div>
        {errors?.map((errorText) => {
          return (
            <Text
              key={errorText}
              theme="error"
              text={validationMapper[errorText]}
            />
          )
        })}
        <Controls
          isReadonly={isReadonly}
          onCancel={onCancel}
          onConfirm={onConfirm}
          onEdit={onEdit}
        />
      </div>
    </div>
  )
})
