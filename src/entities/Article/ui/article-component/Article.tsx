import s from './Article.module.scss'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { memo, useCallback, useMemo } from 'react'
import { AppLink, HStack, Title, VStack } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ArticleBlock, ArticleType } from '../../model/types/article'
import { ArticleCodeBlock } from '../article-code-block/ArticleCodeBlock'
import { ArticleImageBlock } from '../article-image-block/ArticleImageBlock'
import { ArticleTextBlock } from 'entities/Article/ui/article-text-block/ArticleTextBlock'
import { Author } from 'widgets/author'
import { ArticleSkeleton } from '../article-skeleton/ArticleSkeleton'
import { Profile } from 'entities/Profile'
import { Controls } from '../controls-component/Controls'

interface ArticleProps {
  id: string
  article: ArticleType | undefined
  isLoading: boolean | undefined
  author: Profile | undefined
  error: string
}

export const Article = memo((props: ArticleProps) => {
  const { article, isLoading, author, error } = props

  const { t } = useTranslation('article')

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
    <VStack gap="large" className={s.article}>
      <Title className={s.title}>{article.title}</Title>
      <Author
        id={author.id}
        avatar={author.avatar}
        time={`${article.minsToRead} ${t('mins-to-read')}`}
        username={author.username}
      />
      <Controls createdAt={article.createdAt} views={article.views} />
      <LazyLoadImage
        style={{ borderRadius: '.5rem' }}
        effect="blur"
        height={'200px'}
        width={'100%'}
        src={article.img}
        alt={article.description}
      />
      {article.blocks.map(renderBlock)}
      <HStack gap="large" justify="start" max className={s.topics}>
        {renderTopics}
      </HStack>
    </VStack>
  )
})
