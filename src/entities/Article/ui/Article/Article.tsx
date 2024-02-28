import s from './Article.module.scss'
import { classNames, useThunkDispatch } from 'shared/lib'
import { Suspense, memo, useCallback, useEffect } from 'react'
import { fetchArticleById } from './../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/selectors/getArticle/getArticle'
import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { AppLink, Button, Loader, Title } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
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
import Calendar from 'shared/assets/icons/calendar.svg'

interface ArticleProps {
  id: string
}

export const Article = memo(({ id }: ArticleProps) => {
  const dispatch = useThunkDispatch()
  const { t } = useTranslation('article')

  const isLoading = useSelector(getIsLoading)
  const article = useSelector(getArticle)
  const author = useSelector(getAuthor)
  const error = useSelector(getError)

  const renderBlock = useCallback((block: ArticleBlock, i: number) => {
    switch (block.type) {
      case 'text':
        return <ArticleTextBlock key={block.id} block={block} />
      case 'code':
        return <ArticleCodeBlock key={block.id} block={block} />
      case 'image':
        return <ArticleImageBlock key={block.id} block={block} />
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
    return (
      <Title align="center" h="h1">
        {t('error')}
      </Title>
    )
  }

  if (!article || !author || isLoading) {
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
          <span className={s.item}>
            <Eye width={20} height={20} />
            {article.view}
          </span>
          <span className={s.item}>
            <Calendar width={18} height={18} />
            <span style={{ marginLeft: '2px' }}>{article.createdAt}</span>
          </span>
          <span className={s.item}>
            <Button variant="icon">
              <Like width={20} height={20} />
            </Button>
            153
          </span>
          <span className={s.item}>
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
      <Suspense>
        <LazyLoadImage
          style={{ borderRadius: '.5rem' }}
          effect="blur"
          height={'200px'}
          width={'100%'}
          src={article.img}
          alt={article.description}
        />
      </Suspense>
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
