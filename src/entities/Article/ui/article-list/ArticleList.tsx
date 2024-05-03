import { memo } from 'react'
import { ArticleType, ArticleView } from '../../../Article/model/types/article'
import { ArticleListItemSkeleton } from '../article-list-item/ArticleListSkeleton'
import s from './ArticleList.module.scss'
import { ArticleListItem } from '../article-list-item/ArticleListItem'

interface ArticleListProps {
  isLoading: boolean
  articles: ArticleType[]
  view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { view, articles, isLoading } = props

  return (
    <>
      <div className={s['article-list']}>
        {articles.length > 0 &&
          articles.map((article) => (
            <ArticleListItem key={article.id} article={article} view={view} />
          ))}
      </div>
      {isLoading && (
        <>
          <ArticleListItemSkeleton view={view} />
          <ArticleListItemSkeleton view={view} />
        </>
      )}
    </>
  )
})
