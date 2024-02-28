import { memo } from 'react'
import s from './ArticleImageBlock.module.scss'
import { classNames } from 'shared/lib'
import { ArticleImageBlock as ArticleImageBlockProps } from '../../model/types/article'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Title } from 'shared/ui/title/Title'

export const ArticleImageBlock = memo(
  ({ block }: { block: ArticleImageBlockProps }) => {
    const { alt, label, url, title } = block
    return (
      <>
        {title && <Title h="h2">{title}</Title>}
        <figure className={classNames(s.articleimageblock)}>
          <LazyLoadImage className={s.img} src={url} alt={alt} />
          <figcaption className={s['figure-caption']}>{label}</figcaption>
        </figure>
      </>
    )
  }
)
