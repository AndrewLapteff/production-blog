import s from './Article.module.scss'
import { classNames, useThunkDispatch } from 'shared/lib'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from './../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/selectors/getArticle/getArticle'
import { getError } from '../../model/selectors/getError/getError'
import { AppLink, Loader, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getAuthor } from 'entities/Article/model/selectors/getAuthor/getAuthor'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { ArticleBlock } from '../../../Article/model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'

interface ArticleProps {
  id: string
}

export const Article = memo(({ id }: ArticleProps) => {
  const dispatch = useThunkDispatch()
  const { t } = useTranslation('article')

  const article = useSelector(getArticle)
  const author = useSelector(getAuthor)
  const error = useSelector(getError)

  const renderBlock = useCallback((block: ArticleBlock, i: number) => {
    switch (block.type) {
      case 'text':
        return <ArticleTextBlock key={i} block={block} />
      case 'code':
        return <ArticleCodeBlock key={i} block={block} />
      case 'image':
        return <ArticleImageBlock key={i} />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    dispatch(fetchArticleById(id)).catch((err) => {
      console.log(err)
    })
  }, [dispatch, id])

  if (error) {
    return <Text align="center" theme="error" title={`${t('error')}`} />
  }

  if (!article || !author) {
    return (
      <div className={classNames(s.article, {}, [s.centered])}>
        <Loader />
      </div>
    )
  }

  return (
    <div className={s.article}>
      <h1 className={s.title}>{article.title}</h1>
      <div className={s['author-info']}>
        <Avatar
          outline
          size={40}
          alt={`${author.username}'s avatar`}
          src={author.avatar}
        />
        <div className={s.details}>
          <AppLink to={`profile/${author.username}`}>{author.username}</AppLink>
          <span>
            {article.minsToRead} {t('mins-to-read')}
          </span>
        </div>
      </div>
      <LazyLoadImage
        width={'100%'}
        src={article.img}
        alt={article.description}
      />
      <div className={classNames(s['article-info'])}>
        <span>
          {t('views')}: {article.view}
        </span>
      </div>
      {article.blocks.map(renderBlock)}
      <div className={s.topics}>
        {article.topics.map((topic, i) => {
          return (
            <AppLink className={s.topic} to="#" key={topic}>
              {topic}
            </AppLink>
          )
        })}
      </div>
    </div>
  )
})
