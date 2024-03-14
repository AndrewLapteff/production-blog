import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import {
  articlesReducer,
  articlesSelector,
  increasePageValue,
  init
} from '../../model/slice/articlesSlice'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { fetchArticles } from '../../model/services/fetchArticles'
import {
  getHasMoreArticles,
  getIsLoadingArticles,
  getPageArticles,
  getViewArticles
} from '../../model/selectors/articlesSelectors'
import { ArticlesControls } from '../articles-controls/ArticlesControls'
import s from './ArticlesPage.module.scss'
import { Layout } from 'shared/ui'
import { useCallback } from 'react'
import { fetchNextArticles } from 'pages/articles-page/model/services/fetchNextArticles/fetchNextArticles'

const ArticlesPage = () => {
  const dispatch = useThunkDispatch()

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const hasMore = useSelector(getHasMoreArticles)
  const page = useSelector(getPageArticles)
  useInitialEffect(async () => {
    dispatch(init)
    await dispatch(fetchArticles(1))
  }, 'storybook')

  const addArticlesHandler = useCallback(() => {
    console.log('f')
    dispatch(fetchNextArticles())
  }, [dispatch])

  return (
    <DynamicSliceLoader name={'articlesReducer'} reducer={articlesReducer}>
      <Layout callback={addArticlesHandler}>
        <div className={s['articles-page']}>
          <ArticlesControls view={view} />
          <ArticleList view={view} articles={articles} />
        </div>
      </Layout>
    </DynamicSliceLoader>
  )
}

export default ArticlesPage
