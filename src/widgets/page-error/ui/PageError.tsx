import { Button } from 'shared/ui/button/Button'
import s from './PageError.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'

export const PageError = () => {
  const { t } = useTranslation('translation')

  const reloadHandler = () => {
    location.reload()
  }

  return (
    <div className={classNames(s['page-error'])}>
      <h1>{t('something-went-wrong')}</h1>
      <Button size="m" onClick={reloadHandler} variant="primary">
        {t('reload')}
      </Button>
    </div>
  )
}
