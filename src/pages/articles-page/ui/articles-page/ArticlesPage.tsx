import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import {
  articlesReducer,
  articlesSelector,
  init
} from '../../model/slice/articlesSlice'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { fetchArticles } from '../../model/services/fetchArticles/fetchArticles'
import {
  getIsInitArticles,
  getSearchArticles,
  getSortArticles,
  getSortOrderArticles,
  getViewArticles
} from '../../model/selectors/articlesSelectors'
import { ArticlesControls } from '../articles-controls/ArticlesControls'
import { Layout } from 'shared/ui'
import { memo, useCallback, useEffect } from 'react'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'
import { useSearchParams } from 'react-router-dom'
import { URLToObject } from 'shared/lib/url/URLToObject/URLToObject'
import { initArticles } from 'pages/articles-page/model/services/initArticles/initArticles'

const ArticlesPage = memo(() => {
  const dispatch = useThunkDispatch()
  const [searchParams] = useSearchParams()

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const isInited = useSelector(getIsInitArticles)
  const sort = useSelector(getSortArticles)
  const sortOrder = useSelector(getSortOrderArticles)
  const search = useSelector(getSearchArticles)

  useEffect(() => {
    dispatch(fetchArticles({ replace: true }))
  }, [sort, sortOrder, dispatch])

  useInitialEffect(async () => {
    // to avoid extra fetches once reducer inited
    dispatch(
      initArticles({
        sortOrder: searchParams.get('sortOrder'),
        search: searchParams.get('search'),
        sort: searchParams.get('sort')
      })
    )
  }, 'storybook')

  const addArticlesHandler = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  return (
    <Layout callback={addArticlesHandler}>
      <DynamicSliceLoader
        name={'articlesReducer'}
        reducer={articlesReducer}
        removeAfterUnmount={false}
      >
        <ArticlesControls view={view} sort={sort} sortOrder={sortOrder} />
        <ArticleList view={view} articles={articles} />
      </DynamicSliceLoader>
    </Layout>
  )
})

export default ArticlesPage
