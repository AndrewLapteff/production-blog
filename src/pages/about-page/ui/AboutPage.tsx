import { useTranslation } from 'react-i18next'
import { classNames } from '../../../shared/lib/classNames'

const AboutPage = () => {
  const { t } = useTranslation('about')

  return <div>{t('title')}</div>
}

export default AboutPage
