import s from './ArticlePage.module.scss'
import { articleReducer, Article } from 'entities/Article'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Layout, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { recommendationsReducer } from '../../model/slice/recommendationsSlice'
import { Recommendations } from '../recommendations/Recommendations'
import { useSelector } from 'react-redux'
import { getRecommendations } from '../../model/selectors/recommendationsSelectors/selectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { fetchRecommendations } from '../../model/service/fetchRecommendations/fetchRecommendations'
import { ArticleHeaderBar } from '../article-header-bar/ArticleHeaderBar'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { getArticle } from 'entities/Article/model/selectors/getArticle/getArticle'
import { getIsLoading } from 'entities/Article/model/selectors/getIsLoading/getIsLoading'
import { getAuthor } from 'entities/Article/model/selectors/getAuthor/getAuthor'
import { getError } from 'entities/Article/model/selectors/getError/getError'
import { CommentsAsync } from '../comments/CommentsAsync'

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const recommendations = useSelector(getRecommendations)
  const article = useSelector(getArticle)
  const isLoading = useSelector(getIsLoading)
  const author = useSelector(getAuthor)
  const error = useSelector(getError)

  const articleId = Number(id)
  const thunkDispatch = useThunkDispatch()

  useInitialEffect(() => {
    thunkDispatch(fetchRecommendations())
  }, 'storybook')

  if (!id) {
    return (
      <div>
        <Text theme="error">{t('article-is-not-found')}</Text>
      </div>
    )
  }

  useInitialEffect(() => {
    thunkDispatch(fetchArticleById(id))
  }, 'storybook')

  return (
    <Layout>
      <div className={s.article}>
        <DynamicSliceLoader
          name={['articleReducer', 'recommendationsReducer']}
          reducer={[articleReducer, recommendationsReducer]}
          removeAfterUnmount
        >
          <ArticleHeaderBar article={article} />
          <Article
            error={error}
            isLoading={isLoading}
            article={article}
            author={author}
            id={articleId}
          />
          <Recommendations recommendations={recommendations} />
          <CommentsAsync articleId={articleId} />
        </DynamicSliceLoader>
      </div>
    </Layout>
  )
})

export default ArticlePage
