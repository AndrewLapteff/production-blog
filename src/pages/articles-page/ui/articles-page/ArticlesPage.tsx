import { ArticleList } from 'entities/Article/ui/article-list/ArticleList'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import {
  articlesReducer,
  articlesSelector
} from '../../model/slice/articlesSlice'
import { useSelector } from 'react-redux'
import {
  getIsLoadingArticles,
  getSearchArticles,
  getSortArticles,
  getSortOrderArticles,
  getViewArticles
} from '../../model/selectors/articlesSelectors'
import { ArticlesControls } from '../articles-controls/ArticlesControls'
import { Layout } from 'shared/ui'
import { memo, useCallback } from 'react'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'

const ArticlesPage = memo(() => {
  const thunkDispatch = useThunkDispatch()

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const sort = useSelector(getSortArticles)
  const sortOrder = useSelector(getSortOrderArticles)
  const search = useSelector(getSearchArticles)
  const isLoading = useSelector(getIsLoadingArticles)

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
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </DynamicSliceLoader>
    </Layout>
  )
})

export default ArticlesPage
