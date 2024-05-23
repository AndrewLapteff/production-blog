import { useTranslation } from 'react-i18next'
import { Layout } from 'shared/ui'

const MainPage = () => {
  const { t } = useTranslation('main')

  return (
    <Layout dataTestId="main">
      <div>{t('main')}</div>
    </Layout>
  )
}

export default MainPage
