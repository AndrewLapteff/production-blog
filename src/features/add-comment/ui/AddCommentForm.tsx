import s from './AddCommentForm.module.scss'
import { classNames, useDispatchCallback, useThunkDispatch } from 'shared/lib'
import { MouseEvent, memo } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Comment } from 'entities/Comment/model/types/comment'
import { postComment } from '../model/service/postComment'
import { setText } from '../model/slice/commentFormSlice'
import { useSelector } from 'react-redux'
import { getIsLoading, getText } from '../model/selectors/selectors'

interface AddCommentFormProps extends Pick<Comment, 'articleId'> {}

const AddCommentForm = memo(({ articleId }: AddCommentFormProps) => {
  const { t } = useTranslation('translation')
  const dispatch = useThunkDispatch()

  const onTextChangeHandler = useDispatchCallback(setText)

  const text = useSelector(getText)
  const isLoading = useSelector(getIsLoading)

  const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    if (!text) return

    dispatch(postComment({ articleId, text }))
  }

  return (
    <div className={classNames(s.addcommentform)}>
      <textarea
        placeholder={t('what-are-your-thoughts')}
        className={s['text-area']}
        rows={5}
        value={text}
        onChange={onTextChangeHandler}
        disabled={isLoading}
      />
      <Button disabled={isLoading} onClick={onSubmit}>
        {t('post')}
      </Button>
    </div>
  )
})

export default AddCommentForm
