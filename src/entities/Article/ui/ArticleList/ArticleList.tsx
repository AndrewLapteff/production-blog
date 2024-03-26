import { memo, useMemo } from 'react'
import {
  ArticleSort,
  ArticleSortOrder,
  ArticleType,
  ArticleView
} from 'entities/Article/model/types/article'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListSkeleton'
import s from './ArticleList.module.scss'
import { getIsLoadingArticles } from 'pages/articles-page/model/selectors/articlesSelectors'
import { useSelector } from 'react-redux'

interface ArticleListProps {
  isLoading?: boolean
  articles: ArticleType[]
  view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { view, articles } = props
  const isLoading = useSelector(getIsLoadingArticles)

  const renderArticle = (article: ArticleType) => {
    return <ArticleListItem key={article.id} article={article} view={view} />
  }

  return (
    <div className={s['article-list']}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && (
        <>
          <ArticleListItemSkeleton view={view} />
          <ArticleListItemSkeleton view={view} />
        </>
      )}
    </div>
  )
})
