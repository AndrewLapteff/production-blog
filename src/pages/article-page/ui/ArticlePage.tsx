import s from './ArticlePage.module.scss'
import { Article, articleReducer } from 'entities/Article'
import { DynamicSliceLoader, classNames } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { commentsReducer } from '../model/slice/commentSlice'
import { memo } from 'react'
import { RenderOnViewportEntry } from 'app/providers/render-on-viewport-entry/RenderOnViewportEntry'
import { Comments } from 'widgets/comments'

const ArticlePage = memo(() => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')

  if (!id) {
    return (
      <div>
        <Text theme="error">{t('article-is-not-found')}</Text>
      </div>
    )
  }

  return (
    <div className={s.article}>
      <DynamicSliceLoader
        name={'articleReducer'}
        reducer={articleReducer}
        removeAfterUnmount
      >
        <Article id={id} />
        <RenderOnViewportEntry threshold={0}>
          <DynamicSliceLoader
            name={'commentsReducer'}
            reducer={commentsReducer}
            removeAfterUnmount
          >
            <Comments articleId={Number(id)} />
          </DynamicSliceLoader>
        </RenderOnViewportEntry>
        <div style={{ height: '100px' }}>{t('Other articles')}</div>
      </DynamicSliceLoader>
    </div>
  )
})

export default ArticlePage
