import { ArticleTextBlock as ArticleTextBlockProps } from '../../../Article/model/types/article'
import s from './ArticleTextBlock.module.scss'
import { memo } from 'react'
import { Text } from 'shared/ui'
import { Title } from 'shared/ui/title/Title'

export const ArticleTextBlock = memo(
  ({ block }: { block: ArticleTextBlockProps }) => {
    const { text, title } = block
    return (
      <div className={s.articletextblock}>
        {title && (
          <Title h="h2" align="left" size="s">
            {title}
          </Title>
        )}
        {text.map((text) => {
          return <Text className={s.text} text={text} key={text} size="m" />
        })}
      </div>
    )
  }
)
