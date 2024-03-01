import { Profile } from '../../../Profile'

export type ArticleTypes = 'code' | 'text' | 'image'

interface ArticleBase {
  id: number
  type: ArticleTypes
  title?: string
}

export interface ArticleCodeBlock extends ArticleBase {
  type: 'code'
  code: string[] | string
}

export interface ArticleTextBlock extends ArticleBase {
  type: 'text'
  text: string[]
}

export interface ArticleImageBlock extends ArticleBase {
  type: 'image'
  alt: string
  label: string
  url: string
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleTextBlock
  | ArticleImageBlock

export interface ArticleType {
  id: number
  title: string
  description: string
  img: string
  view: number
  authorId: number
  minsToRead: string
  createdAt: string
  topics: string[]
  profile?: Profile
  blocks: ArticleBlock[]
}

export interface ArticleSchema {
  article?: ArticleType
  author?: Profile
  isLoading: boolean
  error?: string
}
