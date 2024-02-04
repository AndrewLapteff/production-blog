import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <div>
      <div>{t('Hello')}</div>
    </div>
  )
}

export default MainPage
