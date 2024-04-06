import { memo } from 'react'
import s from './ArticleImageBlock.module.scss'
import { classNames } from 'shared/lib'
import { ArticleImageBlock as ArticleImageBlockProps } from '../../model/types/article'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import { Title } from 'shared/ui'

export const ArticleImageBlock = memo(
  ({ block }: { block: ArticleImageBlockProps }) => {
    const { alt, label, url, title } = block
    return (
      <>
        {title && <Title h="h2">{title}</Title>}
        <figure className={classNames(s.articleimageblock)}>
          <LazyLoadImage
            style={{ borderRadius: '.5rem' }}
            effect="blur"
            className={s.img}
            src={url}
            alt={alt}
          />
          <figcaption className={s['figure-caption']}>{label}</figcaption>
        </figure>
      </>
    )
  }
)
