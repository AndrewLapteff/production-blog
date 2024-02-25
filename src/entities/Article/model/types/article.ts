type ArticleTypes = 'code' | 'text' | 'image'

interface ArticleBase {
  id: string
  type: ArticleTypes
  title?: string
}

interface ArticleCodeBlock extends ArticleBase {
  type: 'code'
  code: string
}

interface ArticleTextBlock extends ArticleBase {
  type: 'text'
  text: string
}

interface ArticleImageBlock extends ArticleBase {
  type: 'image'
  image: string
  alt: string
  label: string
  url: string
}

type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock

export interface ArticleType {
  id: string
  title: string
  description: string
  img: string
  view: number
  createdAt: string
  topics: string[]
  blocks: ArticleBlock[]
}

export interface ArticleSchema {
  article?: ArticleType
  isLoading: boolean
  error?: string
}
