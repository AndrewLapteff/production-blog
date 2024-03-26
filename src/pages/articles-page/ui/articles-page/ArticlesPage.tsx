import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { DynamicSliceLoader, useDebounce, useThunkDispatch } from 'shared/lib'
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

const ArticlesPage = memo(() => {
  const dispatch = useThunkDispatch()

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
    if (isInited) {
      dispatch(init)
      await dispatch(fetchArticles({}))
    }
  }, 'storybook')

  const addArticlesHandler = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  console.log(navigator.userAgent)

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
