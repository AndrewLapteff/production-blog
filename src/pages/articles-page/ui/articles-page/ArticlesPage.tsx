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
  getViewArticles
} from '../../model/selectors/articlesSelectors'
import { ArticlesControls } from '../articles-controls/ArticlesControls'
import s from './ArticlesPage.module.scss'
import { Layout } from 'shared/ui'
import { useCallback } from 'react'
import { fetchNextArticles } from '../../model/services/fetchNextArticles/fetchNextArticles'

const ArticlesPage = () => {
  const dispatch = useThunkDispatch()

  const articles = useSelector(articlesSelector.selectAll)
  const view = useSelector(getViewArticles)
  const isInited = useSelector(getIsInitArticles)

  useInitialEffect(async () => {
    // to avoid extra fetches once reducer inited
    if (isInited) {
      dispatch(init)
      await dispatch(fetchArticles(1))
    }
  }, 'storybook')

  const addArticlesHandler = useCallback(() => {
    dispatch(fetchNextArticles())
  }, [dispatch])

  return (
    <Layout callback={addArticlesHandler}>
      <div className={s['articles-page']}>
        <DynamicSliceLoader
          name={'articlesReducer'}
          reducer={articlesReducer}
          removeAfterUnmount={false}
        >
          <ArticlesControls view={view} />
          <ArticleList view={view} articles={articles} />
        </DynamicSliceLoader>
      </div>
    </Layout>
  )
}

export default ArticlesPage
