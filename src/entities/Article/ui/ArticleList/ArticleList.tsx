import s from './ArticleList.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article, ArticleView } from '../../../Article/model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'

interface ArticleListProps {
  className?: string
  isLoading: boolean
  articles: Article[]
  view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { articles, isLoading, className, view } = props

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} />
  }
  const { t } = useTranslation('article')

  return (
    <div className={classNames(s.articlelist)}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  )
})
