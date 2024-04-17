import { memo } from 'react'
import { ArticleType, ArticleView } from '../../../Article/model/types/article'
import { ArticleListItemSkeleton } from '../article-list-item/ArticleListSkeleton'
import s from './ArticleList.module.scss'
import { getIsLoadingArticles } from 'pages/articles-page/model/selectors/articlesSelectors'
import { useSelector } from 'react-redux'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'
import { ArticleListItem } from '../article-list-item/ArticleListItem'
import { PAGE_WIDTH } from 'shared/consts/common'

interface ArticleListProps {
  isLoading?: boolean
  articles: ArticleType[]
  view: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { view, articles } = props
  const isLoading = useSelector(getIsLoadingArticles)
  const articleHeight = view === 'classic' ? 450 : 270
  const renderListItem = ({ index, key, style }: ListRowProps) => {
    return (
      <ArticleListItem
        key={key}
        article={articles[index]}
        style={style}
        view={view}
      />
    )
  }

  // const renderArticle = (article: ArticleType) => {
  //   return <ArticleListItem key={article.id} article={article} view={view} />
  // }

  return (
    <>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop, registerChild }) => {
          return (
            // @ts-expect-error
            <div ref={registerChild} className={s['article-list']}>
              <List
                autoHeight
                height={height}
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                rowCount={articles.length}
                rowHeight={articleHeight}
                rowRenderer={renderListItem}
                scrollTop={scrollTop}
                width={PAGE_WIDTH}
              />
            </div>
          )
        }}
      </WindowScroller>

      {isLoading && (
        <>
          <ArticleListItemSkeleton view={view} />
          <ArticleListItemSkeleton view={view} />
        </>
      )}
    </>
  )
})
