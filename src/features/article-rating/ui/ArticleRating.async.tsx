import { lazy, Suspense } from 'react'

const ArticleRatingAsync = lazy(async () => await import('./ArticleRating'))

export const ArticleRatingAsyncWrapper = (props: { id: number }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ArticleRatingAsync {...props} />
    </Suspense>
  )
}
