export interface FeatureFlags {
  isArticleRatingEnabled: boolean
}

export interface ToggleFeatureProps<T> {
  name: keyof FeatureFlags
  on: () => T
  off: () => T
}
