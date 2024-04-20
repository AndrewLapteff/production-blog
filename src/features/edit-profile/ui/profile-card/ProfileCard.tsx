import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import s from './ProfileCard.module.scss'
import {
  classNames,
  useDispatchCallback,
  useDispatchCallbackWithArgs,
  useThunkDispatch
} from 'shared/lib'
import { HStack, Loader, Option, Select, Text, VStack } from 'shared/ui'
import { postProfile } from '../../model/service/postProfile/updateProfile'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { memo, useCallback, useMemo } from 'react'
import { countries } from 'shared/consts/countries/countries'
import { ProfileInput } from '../profile-input/ProfileInput'
import { Controls } from '../controls/Controls'
import {
  getError,
  getProfile,
  getIsLoading,
  getIsReadonly,
  getValidationErrors
} from '../../model/selectors'
import {
  setAge,
  setBio,
  setCountry,
  setReadonly,
  setUsername
} from '../../model/slice/profileSlice'
import { PROFILE_VALIDATION } from 'entities/Profile'
import { getUser } from 'entities/User'

export const ProfileCard = memo(() => {
  const { t } = useTranslation('profile')
  const dispatch = useThunkDispatch()

  const user = useSelector(getUser)
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
    dispatch(postProfile(profile?.id || 0)).catch((err) => {
      console.log(err)
    })
    dispatch(setReadonly(true))
  }, [dispatch, profile])

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

  const options: Array<Option<string>> = useMemo(
    () =>
      countries.map((country) => {
        return { content: country.name, value: country.name }
      }),
    []
  )
  if (error) {
    return (
      <VStack className={classNames(s.wrapper)}>
        <Text title="Smth went wrong" align="center">
          {t('try-again-later')}
        </Text>
      </VStack>
    )
  }

  if (isLoading || !profile) {
    return (
      <VStack className={classNames(s.wrapper)}>
        <Loader />
      </VStack>
    )
  }

  return (
    <VStack className={classNames(s.wrapper)}>
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
        <HStack
          justify="space-between"
          align="center"
          className={classNames(s['field-wrapper'])}
        >
          <Text size="s">{t('country')}</Text>
          <Select
            onSelect={onSelectCountry}
            readonly={isReadonly}
            options={options}
            value={profile.country}
          />
        </HStack>
        {errors?.map((errorText) => {
          return (
            <Text key={errorText} theme="error">
              {validationMapper[errorText]}
            </Text>
          )
        })}

        {user.id === profile?.userId && (
          <Controls
            isReadonly={isReadonly}
            onCancel={onCancel}
            onConfirm={onConfirm}
            onEdit={onEdit}
          />
        )}
      </div>
    </VStack>
  )
})
