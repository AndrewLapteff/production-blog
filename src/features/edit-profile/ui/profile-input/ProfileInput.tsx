import { Input, Text } from 'shared/ui'
import s from './ProfileInput.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Profile } from '../../../../entities/Profile/model/types/profile'
import { ChangeEvent, HTMLInputTypeAttribute, memo } from 'react'

type ProfileValues = keyof Profile

// type Test = Record<ProfileValues, Profile[ProfileValues]>

interface Props {
  value: Profile[ProfileValues] | undefined
  name: ProfileValues
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isReadonly: boolean | undefined
  type?: HTMLInputTypeAttribute
  'data-testid'?: string
}

export const ProfileInput = memo((props: Props) => {
  const {
    value,
    onChange,
    isReadonly,
    type,
    name,
    'data-testid': dataTestId
  } = props

  const { t } = useTranslation('profile')

  return (
    <div className={classNames(s['field-wrapper'])}>
      <Text size="s">{t(`${name}`)}</Text>
      <Input
        data-testid={dataTestId}
        type={type || 'text'}
        value={value || ''}
        onChange={onChange}
        readonly={isReadonly}
      />
    </div>
  )
})
