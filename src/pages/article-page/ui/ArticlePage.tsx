import { Article, articleReducer } from 'entities/Article'
import s from './ArticlePage.module.scss'
import { DynamicSliceLoader, classNames } from 'shared/lib'
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
    <DynamicSliceLoader
      name="articleReducer"
      reducer={articleReducer}
      removeAfterUnmount
    >
      <div className={s.article}>
        <Article id={id} />
      </div>
    </DynamicSliceLoader>
  )
}

export default ArticlePage
