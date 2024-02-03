import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t } = useTranslation()

  return <div>{t('Welcome to React')}</div>
}

export default MainPage
