import s from './ArticlePage.module.scss'
import { Article, articleReducer } from 'entities/Article'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Layout, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { commentsReducer } from '../model/slice/commentSlice'
import { memo } from 'react'
import { RenderOnViewportEntry } from 'app/providers/render-on-viewport-entry'
import { Comments } from 'widgets/comments'
import { addCommentFormReducer } from 'features/add-comment'
import { recommendationsReducer } from '../model/slice/recommendationsSlice'
import { Recommendations } from './recommendations/Recommendations'
import { useSelector } from 'react-redux'
import { getRecommendations } from '../model/selectors/recommendationsSelectors/selectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { fetchRecommendations } from '../model/service/fetchRecommendations/fetchRecommendations'
import { ArticleHeaderBar } from './article-header-bar/ArticleHeaderBar'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById'
import { getArticle } from 'entities/Article/model/selectors/getArticle/getArticle'
import { getIsLoading } from 'entities/Article/model/selectors/getIsLoading/getIsLoading'
import { ArticleSkeleton } from 'entities/Article/ui/article-skeleton/ArticleSkeleton'
import { getAuthor } from 'entities/Article/model/selectors/getAuthor/getAuthor'
import { getError } from 'entities/Article/model/selectors/getError/getError'

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const recommendations = useSelector(getRecommendations)
  const article = useSelector(getArticle)
  const isLoading = useSelector(getIsLoading)
  const author = useSelector(getAuthor)
  const error = useSelector(getError)

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
            id={id}
          />
          <Recommendations recommendations={recommendations} />
          <RenderOnViewportEntry threshold={0}>
            <DynamicSliceLoader
              name={['commentsReducer', 'addCommentForm']}
              reducer={[commentsReducer, addCommentFormReducer]}
              removeAfterUnmount
            >
              <Comments articleId={Number(id)} />
            </DynamicSliceLoader>
          </RenderOnViewportEntry>
          <div style={{ height: '100px' }}>{t('Other articles')}</div>
        </DynamicSliceLoader>
      </div>
    </Layout>
  )
})

export default ArticlePage
