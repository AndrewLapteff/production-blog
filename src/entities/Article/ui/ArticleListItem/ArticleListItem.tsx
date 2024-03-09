import s from './ArticleListItem.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Article, ArticleView } from '../../../Article/model/types/article'

interface ArticleListItemProps {
  article?: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { article, view } = props
  const { t } = useTranslation('article')

  if (view === 'card') {
    return <div></div>
  }

  if (view === 'classic') {
    return <div className={classNames(s.articlelistitem)}>{article?.title}</div>
  }
})
