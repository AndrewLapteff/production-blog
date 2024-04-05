import s from './Recommendations.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo, ReactNode, useMemo } from 'react'
import { ArticleType } from 'entities/Article'
import { Title } from 'shared/ui'
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
    <div className={classNames(s['recommendations-wrapper'])}>
      <Title>{t('recommendations')}</Title>
      <div className={s.recommendations}>{articles}</div>
    </div>
  )
})
