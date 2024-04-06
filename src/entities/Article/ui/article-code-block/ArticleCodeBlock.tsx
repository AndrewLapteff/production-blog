import { memo } from 'react'
import { ArticleCodeBlock as ArticleCodeBlockProps } from '../../model/types/article'
import s from './ArticleCodeBlock.module.scss'
import { Title, Code } from 'shared/ui'

export const ArticleCodeBlock = memo(
  ({ block }: { block: ArticleCodeBlockProps }) => {
    const { code, title } = block

    const prepareCode = (code: string[] | string) => {
      let stringLikeCode

      if (typeof code !== 'string') {
        stringLikeCode = code.join('\n')
      } else {
        stringLikeCode = code
      }

      return stringLikeCode
    }

    return (
      <div className={s.articlecodeblock}>
        {title && <Title h="h3">{title}</Title>}
        <Code code={prepareCode(code)} />
      </div>
    )
  }
)
