import { memo } from 'react'
import s from './ArticleImageBlock.module.scss'
import { classNames } from 'shared/lib'

export const ArticleImageBlock = memo(() => {
  return <div className={classNames(s.articleimageblock)}></div>
})
