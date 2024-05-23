import { useTranslation } from 'react-i18next'
import s from './NotFound.module.scss'
import { classNames } from 'shared/lib'

export const NotFound = () => {
  const { t } = useTranslation('translation')

  return (
    <div data-testid="not-found" className={classNames(s['not-found-wrapper'])}>
      <h1>{t('not-found')}</h1>
      <p>{t('not-found-message')}</p>
    </div>
  )
}
