import { Button } from 'shared/ui'
import s from './Controls.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ProfileControlsProps {
  isReadonly: boolean | undefined
  onEdit: () => void
  onCancel: () => void
  onConfirm: () => void
}

export const Controls = memo((props: ProfileControlsProps) => {
  const { isReadonly, onCancel, onConfirm, onEdit } = props
  const { t } = useTranslation('profile')

  return (
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
  )
})
