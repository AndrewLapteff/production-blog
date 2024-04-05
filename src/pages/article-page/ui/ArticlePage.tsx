import s from './ArticlePage.module.scss'
import { Article, articleReducer } from 'entities/Article'
import { DynamicSliceLoader, useThunkDispatch } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Layout, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { commentsReducer } from '../model/slice/commentSlice'
import { memo, useEffect } from 'react'
import { RenderOnViewportEntry } from 'app/providers/render-on-viewport-entry'
import { Comments } from 'widgets/comments'
import { addCommentFormReducer } from 'features/add-comment'
import { recommendationsReducer } from '../model/slice/recommendationsSlice'
import { Recommendations } from './recommendations/Recommendations'
import { useSelector } from 'react-redux'
import { getRecommendations } from '../model/selectors/recommendationsSelectors/selectors'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect'
import { fetchRecommendations } from '../model/service/fetchRecommendations/fetchRecommendations'

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const recommendations = useSelector(getRecommendations)
  const dispatch = useThunkDispatch()

  if (!id) {
    return (
      <div>
        <Text theme="error">{t('article-is-not-found')}</Text>
      </div>
    )
  }

  useInitialEffect(() => {
    dispatch(fetchRecommendations())
  }, 'storybook')

  return (
    <Layout>
      <div className={s.article}>
        <DynamicSliceLoader
          name={['articleReducer', 'recommendationsReducer']}
          reducer={[articleReducer, recommendationsReducer]}
          removeAfterUnmount
        >
          <Article id={id} />
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
