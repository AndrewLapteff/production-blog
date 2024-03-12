import s from './Article.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { useThunkDispatch } from 'shared/lib'
import { memo, useCallback, useMemo } from 'react'
import { fetchArticleById } from './../../model/services/fetchArticleById'
import { useSelector } from 'react-redux'
import { getArticle } from '../../model/selectors/getArticle/getArticle'
import { getError } from '../../model/selectors/getError/getError'
import { getIsLoading } from '../../model/selectors/getIsLoading/getIsLoading'
import { AppLink, Title } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { getAuthor } from '../../../Article/model/selectors/getAuthor/getAuthor'
import { ArticleBlock } from '../../../Article/model/types/article'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock'
import { Controls } from '../Controls/Controls'
import { Author } from 'widgets/author'
import { useInitialEffect } from 'shared/lib/hooks/useEnviroment'
import { ArticleSkeleton } from '../ArticleSkeleton/ArticleSkeleton'

interface ArticleProps {
  id: string
}

export const Article = memo(({ id }: ArticleProps) => {
  const dispatch = useThunkDispatch()
  const { t } = useTranslation('article')
  useInitialEffect(
    async () => await dispatch(fetchArticleById(id)),
    'storybook'
  )

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

  const renderTopics = useMemo(() => {
    return article?.topics.map((topic) => {
      return (
        <AppLink className={s.topic} to="#" key={topic}>
          {topic}
        </AppLink>
      )
    })
  }, [article])

  if (error) {
    return (
      <Title align="center" h="h1">
        {t('error')}
      </Title>
    )
  }

  if (!article || !author || isLoading) {
    return <ArticleSkeleton />
  }

  return (
    <div className={s.article}>
      <h1 className={s.title}>{article.title}</h1>
      <Author
        id={author.id}
        avatar={author.avatar}
        time={`${article.minsToRead} ${t('mins-to-read')}`}
        username={author.username}
      />
      <Controls createdAt={article.createdAt} view={article.view} />
      <LazyLoadImage
        style={{ borderRadius: '.5rem' }}
        effect="blur"
        height={'200px'}
        width={'100%'}
        src={article.img}
        alt={article.description}
      />
      {article.blocks.map(renderBlock)}
      <div className={s.topics}>{renderTopics}</div>
    </div>
  )
})
