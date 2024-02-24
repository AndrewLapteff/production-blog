import s from './Article.module.scss'
import { classNames } from 'shared/lib'

export const Article = () => {
  return <div className={classNames(s.article)}></div>
}
