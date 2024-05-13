import { useTranslation } from 'react-i18next'
import { memo, ReactNode } from 'react'
import { Layout } from 'shared/ui'

interface ArticleEditPageProps {
  children?: ReactNode
}

export const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { t } = useTranslation('')
  return <Layout></Layout>
})
