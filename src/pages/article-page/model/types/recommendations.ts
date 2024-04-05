import { ArticleType } from 'entities/Article'

export interface RecommendationsSchema {
  recommendations: ArticleType[]
  isLoading: boolean
  error?: string
}
