import s from './ArticleHeaderBar.module.scss'
import { classNames } from 'shared/lib'
import { memo, ReactNode, useCallback } from 'react'
import { Button } from 'shared/ui'
import ArrowToTheLeft from 'shared/assets/icons/arrow-to-the-left.svg'
import Edit from 'shared/assets/icons/edit.svg'
import { useNavigate } from 'react-router-dom'
import { routes } from 'shared/config'
import { useSelector } from 'react-redux'
import { getArticle } from 'entities/Article/model/selectors/getArticle/getArticle'
import { getUser } from 'entities/User'

interface ArticleHeaderBarProps {
  children?: ReactNode
}

export const ArticleHeaderBar = memo((props: ArticleHeaderBarProps) => {
  const navigate = useNavigate()
  const article = useSelector(getArticle)
  const user = useSelector(getUser)
  const carUserEdit = article?.profileId === user.id

  const goBackToArticles = useCallback(() => {
    navigate(routes.articles)
  }, [navigate])

  return (
    <div className={classNames(s.articleheaderbar)}>
      <Button onClick={goBackToArticles} size="l" variant="outline">
        <ArrowToTheLeft width={25} height={25} />
      </Button>
      {carUserEdit && (
        <Button size="l" variant="outline">
          <Edit width={25} height={25} />
        </Button>
      )}
    </div>
  )
})
