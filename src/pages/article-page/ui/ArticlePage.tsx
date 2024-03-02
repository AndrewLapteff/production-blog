import { Article, articleReducer } from 'entities/Article'
import s from './ArticlePage.module.scss'
import { DynamicSliceLoader, classNames, useThunkDispatch } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { CommentList } from 'entities/Comment'
import { useSelector } from 'react-redux'
import { getArticle } from 'entities/Article/model/selectors/getArticle/getArticle'
import { commentsReducer, commentsSelector } from '../model/slice/commentSlice'
import { getIsLoading } from '../model/selectors/selectors'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { fetchCommentById } from '../model/service/fetchCommentById/fetchCommentById'
import { useEffect } from 'react'

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article')
  const dispatch = useThunkDispatch()

  const article = useSelector(getArticle)
  const isLoading = useSelector(getIsLoading)

  const comments = useSelector(commentsSelector.selectAll)

  useInitialEffect(
    async () => await dispatch(fetchCommentById(id)),
    'storybook'
  )

  if (!id) {
    return (
      <div className={classNames(s.articlepage)}>
        <Text theme="error">{t('article-is-not-found')}</Text>
      </div>
    )
  }

  return (
    <DynamicSliceLoader
      name={['articleReducer', 'commentsReducer']}
      reducer={[articleReducer, commentsReducer]}
      removeAfterUnmount
    >
      <div className={s.article}>
        <Article id={id} />
        {article && <CommentList comments={comments} />}
      </div>
    </DynamicSliceLoader>
  )
}

export default ArticlePage
