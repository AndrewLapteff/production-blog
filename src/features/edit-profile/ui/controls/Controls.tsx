import { Button } from 'shared/ui'
import s from './Controls.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ProfileControlsProps {
  isReadonly: boolean | undefined
  onEdit: () => void
  onCancel: () => void
  onConfirm: () => void
  'data-testid'?: string
}

export const Controls = memo((props: ProfileControlsProps) => {
  const {
    isReadonly,
    onCancel,
    onConfirm,
    onEdit,
    'data-testid': dataTestId
  } = props
  const { t } = useTranslation('profile')

  return (
    <div className={s.controls}>
      {isReadonly ? (
        <Button
          data-testid={`${dataTestId}.edit`}
          variant="outline"
          onClick={onEdit}
        >
          {t('edit')}
        </Button>
      ) : (
        <Button
          data-testid={`${dataTestId}.cancel`}
          variant="red"
          onClick={onCancel}
        >
          {t('cancel')}
        </Button>
      )}
      {!isReadonly && (
        <Button
          data-testid={`${dataTestId}.confirm`}
          disabled={isReadonly}
          onClick={onConfirm}
        >
          {t('confirm')}
        </Button>
      )}
    </div>
  )
})
