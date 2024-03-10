import { memo } from 'react'
import { Article, ArticleView } from '../../../Article/model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListSkeleton'

interface ArticleListProps {
  isLoading: boolean
  articles: Article[]
  view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { isLoading, view, articles } = props

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  }

  if (isLoading) {
    return (
      <div>
        <ArticleListItemSkeleton view={view} />
      </div>
    )
  }

  return <div>{articles.length > 0 ? articles.map(renderArticle) : null}</div>
})
