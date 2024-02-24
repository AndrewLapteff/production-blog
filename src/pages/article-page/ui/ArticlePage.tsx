import { Article } from 'entities/Article'
import s from './ArticlePage.module.scss'
import { classNames } from 'shared/lib'

const ArticlePage = () => {
  return (
    <div className={classNames(s.articlepage)}>
      <Article />
      <div></div>
    </div>
  )
}

export default ArticlePage
