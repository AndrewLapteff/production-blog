import { Profile } from 'entities/Profile'

export type ArticleTypes = 'code' | 'text' | 'image'

interface ArticleBase {
  id: string
  type: ArticleTypes
  title?: string
}

export interface ArticleCodeBlock extends ArticleBase {
  type: 'code'
  code: string[]
}

export interface ArticleTextBlock extends ArticleBase {
  type: 'text'
  text: string[]
}

export interface ArticleImageBlock extends ArticleBase {
  type: 'image'
  image: string
  alt: string
  label: string
  url: string
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock

export interface ArticleType {
  id: string
  title: string
  description: string
  img: string
  view: number
  authorId: string
  minsToRead: string
  createdAt: string
  topics: string[]
  blocks: ArticleBlock[]
}

export interface ArticleSchema {
  article?: ArticleType
  author?: Profile
  isLoading: boolean
  error?: string
}
