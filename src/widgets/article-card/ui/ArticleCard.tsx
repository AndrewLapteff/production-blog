import s from './ArticleCard.module.scss'
import { classNames } from 'shared/lib'
import { memo } from 'react'
import { ArticleType } from 'entities/Article'
import { AppLink, Text } from 'shared/ui'
import { CUTLINE_LENGHT } from 'shared/consts/common'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

interface ArticleProps {
  article: ArticleType
  target?: '_blank' | '_self' | '_parent' | '_top'
}

export const ArticleCard = memo(({ article, target }: ArticleProps) => {
  const cutLine = (string: string) => {
    if (string.length > CUTLINE_LENGHT) {
      return string.slice(0, CUTLINE_LENGHT) + '...'
    }
    return string
  }
  return (
    <AppLink
      target={target}
      to={`/article/${article.id}`}
      className={classNames(s['article-card'])}
    >
      <LazyLoadImage
        style={{ borderRadius: '.5rem' }}
        effect="opacity"
        width={220}
        src={article.img}
      />
      <Text size="s">{cutLine(article.title)}</Text>
    </AppLink>
  )
})
