import { Profile } from 'entities/Profile'

export interface Comment {
  id: number
  text: string
  articleId: number
  profileId: number
  createdAt: string
  profile?: Profile
}
