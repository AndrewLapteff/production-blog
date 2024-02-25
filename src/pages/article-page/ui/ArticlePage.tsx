import { Article } from 'entities/Article'
import s from './ArticlePage.module.scss'
import { classNames } from 'shared/lib'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui'

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <div className={classNames(s.articlepage)}>
        <Text theme="error" text="Article is not found" />
      </div>
    )
  }

  return (
    <div className={classNames(s.articlepage)}>
      <Article id={id} />
    </div>
  )
}

export default ArticlePage
