import { memo } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

interface CodeProps {
  code: string
}

export const Code = memo(({ code }: CodeProps) => {
  return (
    <SyntaxHighlighter
      customStyle={{ fontSize: '1rem', marginTop: 10, borderRadius: '0.5rem' }}
      language="javascript"
      style={stackoverflowDark}
    >
      {code}
    </SyntaxHighlighter>
  )
})
