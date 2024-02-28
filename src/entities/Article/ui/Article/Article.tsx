import s from './Article.module.scss'
import { classNames, useThunkDispatch } from 'shared/lib'
import { memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from './../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/selectors/getArticle/getArticle'
import { getError } from '../../model/selectors/getError/getError'
import { AppLink, Button, Loader, Text } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getAuthor } from '../../../Article/model/selectors/getAuthor/getAuthor'
import { Avatar } from 'shared/ui/avatar/Avatar'
import { ArticleBlock } from '../../../Article/model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import Eye from 'shared/assets/icons/eye.svg'
import Share from 'shared/assets/icons/share.svg'
import Save from 'shared/assets/icons/save.svg'
import Like from 'shared/assets/icons/like.svg'
import Comment from 'shared/assets/icons/comment.svg'

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
        return <ArticleImageBlock key={i} block={block} />
      default:
        return null
    }
  }, [])

  useEffect(() => {
    if (PROJECT_ENV !== 'storybook') {
      dispatch(fetchArticleById(id)).catch((err) => {
        console.log(err)
      })
    }
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
          <div>
            <span>
              {article.minsToRead} {t('mins-to-read')}
            </span>
          </div>
        </div>
      </div>
      <div className={classNames(s['article-info'])}>
        <div className={s['meta-info']}>
          <span className={s.items}>
            <Eye width={20} height={20} />
            {article.view}
          </span>
          <span className={s.items}>
            <Button variant="icon">
              <Like width={20} height={20} />
            </Button>
            153
          </span>
          <span className={s.items}>
            <Button variant="icon">
              <Comment width={20} height={20} />
            </Button>
            2
          </span>
        </div>
        <div className={s.controls}>
          <Button variant="icon">
            <Share width={19} height={19} />
          </Button>
          <Button variant="icon">
            <Save width={20} height={20} />
          </Button>
        </div>
      </div>
      <LazyLoadImage
        width={'100%'}
        src={article.img}
        alt={article.description}
      />
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
