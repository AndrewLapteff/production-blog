import s from './AddCommentForm.module.scss'
import { classNames } from 'shared/lib'
import { ChangeEvent, MouseEvent, memo, useState } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { Comment } from 'entities/Comment/model/types/comment'
import { prepareDate } from '../model/lib/prepareDate'
import { useDispatch } from 'react-redux'
import { addComment } from 'pages/article-page'

interface AddCommentFormProps
  extends Pick<Comment, 'articleId' | 'profileId'> {}

export const AddCommentForm = memo(
  ({ articleId, profileId }: AddCommentFormProps) => {
    const { t } = useTranslation('translation')
    const [text, setText] = useState<string>('')
    const dispatch = useDispatch()

    const onTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setText((prev) => e.target.value)
    }

    const onSubmit = (e: MouseEvent<HTMLButtonElement>) => {
      const date = new Date()
      const day = prepareDate(date.getDate())
      const month = prepareDate(date.getMonth())
      const year = prepareDate(date.getFullYear())

      const comment: Comment = {
        articleId,
        profileId,
        id: 3,
        createdAt: `${day}.${month}.${year}`,
        text,
        profile: {
          id: 1,
          username: 'Amigooo',
          avatar: 'https://avatars.githubusercontent.com/u/114949478?v=4',
          country: 'Ukraine',
          age: 18,
          bio: "Hello world, that's it!"
        }
      }
      console.log('f')
      dispatch(addComment(comment))
    }

    return (
      <div className={classNames(s.addcommentform)}>
        <textarea
          placeholder={t('what-are-your-thoughts')}
          className={s['text-area']}
          rows={5}
          value={text}
          onChange={onTextChangeHandler}
        />
        <Button onClick={onSubmit}>{t('post')}</Button>
      </div>
    )
  }
)
