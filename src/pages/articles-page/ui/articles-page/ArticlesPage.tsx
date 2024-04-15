import { ArticleList } from 'entities/Article/ui/article-list/ArticleList'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import {
  articlesReducer,
  articlesSelector
} from '../../model/slice/articlesSlice'
import { useSelector } from 'react-redux'
import {
  getSearchArticles,
  getSortArticles,
  getSortOrderArticles,
  getViewArticles
} from '../../model/selectors/articlesSelectors'
import { ArticlesControls } from '../articles-controls/ArticlesControls'
import { Layout } from 'shared/ui'
import { memo, useCallback } from 'react'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { useSearchParams } from 'react-router-dom'
import { getInited } from 'entities/User/model/selectors/getInited/getInited'
import { ArticlePage } from 'pages/article-page/index'

const ArticlesPage = memo(() => {
  const thunkDispatch = useThunkDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const sort = useSelector(getSortArticles)
  const sortOrder = useSelector(getSortOrderArticles)
  const search = useSelector(getSearchArticles)
  const inited = useSelector(getInited)
  // useInitialEffect(() => {
  //   if (!inited) {
  //     thunkDispatch(
  //       initArticles({
  //         sortOrder: searchParams.get('sortOrder'),
  //         search: searchParams.get('search'),
  //         sort: searchParams.get('sort')
  //       })
  //     )
  //     thunkDispatch(fetchArticles({ replace: false }))
  //   }
  // }, 'storybook')

  const addArticlesHandler = useCallback(() => {
    thunkDispatch(fetchNextArticles())
  }, [thunkDispatch])

  return (
    <Layout infiniteScrollCallback={addArticlesHandler}>
      <DynamicSliceLoader
        name={'articlesReducer'}
        reducer={articlesReducer}
        removeAfterUnmount={false}
      >
        <ArticlesControls
          search={search}
          view={view}
          sort={sort}
          sortOrder={sortOrder}
        />
        <ArticleList view={view} articles={articles} />
      </DynamicSliceLoader>
    </Layout>
  )
})

export default ArticlesPage
