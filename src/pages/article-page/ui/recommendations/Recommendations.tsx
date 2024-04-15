import { useTranslation } from 'react-i18next'
import { memo, ReactNode, useMemo } from 'react'
import { ArticleType } from 'entities/Article'
import { HStack, Title, VStack } from 'shared/ui'
import { ArticleCard } from 'widgets/article-card/ui/ArticleCard'

interface RecommendationsProps {
  children?: ReactNode
  recommendations: ArticleType[]
}

export const Recommendations = memo((props: RecommendationsProps) => {
  const { recommendations } = props

  const { t } = useTranslation('article')

  const articles = useMemo(() => {
    return recommendations.map((article) => {
      return <ArticleCard target="_blank" key={article.id} article={article} />
    })
  }, [recommendations])

  return (
    <VStack>
      <Title>{t('recommendations')}</Title>
      <HStack>{articles}</HStack>
    </VStack>
  )
})
