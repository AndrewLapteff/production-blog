import s from './Article.module.scss'
import { DynamicSliceLoader, classNames, useThunkDispatch } from 'shared/lib'
import { memo, useEffect } from 'react'
import { fetchArticleById } from './../../model/services/fetchArticleById'
import { articleReducer } from './../../../Article/model/slice/articleSlice'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/selectors/getArticle/getArticle'
import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'

interface ArticleProps {
  id: string
}

export const Article = memo(({ id }: ArticleProps) => {
  const dispatch = useThunkDispatch()
  const { t } = useTranslation('article')

  const article = useSelector(getArticle)
  const error = useSelector(getError)
  const isLoading = useSelector(getIsLoading)

  useEffect(() => {
    dispatch(fetchArticleById(id || '1')).catch((err) => {
      console.log(err)
    })
  }, [dispatch, id])

  if (error) {
    return <Text align="center" theme="error" title={`${t('error')}`} />
  }

  return (
    <DynamicSliceLoader
      name="articleReducer"
      reducer={articleReducer}
      removeAfterUnmount
    >
      <div className={classNames(s.article)}>
        <Skeleton height={20} width={100} />
      </div>
    </DynamicSliceLoader>
  )
})
