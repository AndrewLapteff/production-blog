import { ArticleTextBlock as ArticleTextBlockProps } from 'entities/Article/model/types/article'
import s from './ArticleTextBlock.module.scss'
import { memo } from 'react'
import { Text } from 'shared/ui'

export const ArticleTextBlock = memo(
  ({ block }: { block: ArticleTextBlockProps }) => {
    const { text, title } = block
    return (
      <div className={s.articletextblock}>
        {title && <Text h="h2" title={title} align="left" size="s" />}
        {text.map((text) => {
          return <Text className={s.text} text={text} key={text} size="m" />
        })}
      </div>
    )
  }
)
