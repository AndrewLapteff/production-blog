import { memo } from 'react'
import { ArticleCodeBlock as ArticleCodeBlockProps } from '../../model/types/article'
import s from './ArticleCodeBlock.module.scss'
import { Text } from 'shared/ui'
import { Code } from 'shared/ui/code/Code'

export const ArticleCodeBlock = memo(
  ({ block }: { block: ArticleCodeBlockProps }) => {
    const { code, title } = block
    return (
      <div className={s.articlecodeblock}>
        {title && <Text h="h3" title={title} />}
        <Code code={code.join('\n')} />
      </div>
    )
  }
)
