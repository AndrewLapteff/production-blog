import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import {
  DynamicSliceLoader,
  useDispatchCallback,
  useThunkDispatch
} from 'shared/lib'
import {
  articlesReducer,
  articlesSelector,
  changeView
} from '../model/slice/articlesSlice'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { fetchArticles } from '../model/services/fetchArticles'
import {
  getIsLoadingArticles,
  getViewArticles
} from '../model/selectors/articlesSelectors'

const ArticlesPage = () => {
  const dispatch = useThunkDispatch()
  const onViewChange = useDispatchCallback(changeView)

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const isLoading = useSelector(getIsLoadingArticles)

  useInitialEffect(async () => await dispatch(fetchArticles()), 'storybook')

  return (
    <DynamicSliceLoader name={'articlesReducer'} reducer={articlesReducer}>
      <ArticleList isLoading={isLoading} view={view} articles={articles} />
    </DynamicSliceLoader>
  )
}

export default ArticlesPage
