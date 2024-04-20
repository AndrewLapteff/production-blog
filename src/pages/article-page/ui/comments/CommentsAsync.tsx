import { DynamicSliceLoader } from 'shared/lib'
import { memo } from 'react'
import { RenderOnViewportEntry } from 'app/providers/render-on-viewport-entry'
import { addCommentFormReducer } from 'features/add-comment'
import { Comments } from 'widgets/comments'
import { commentsReducer } from '../../model/slice/commentSlice'

interface CommentsAsyncProps {
  articleId: number
}

export const CommentsAsync = memo(({ articleId }: CommentsAsyncProps) => {
  return (
    <RenderOnViewportEntry threshold={0}>
      <DynamicSliceLoader
        name={['commentsReducer', 'addCommentForm']}
        reducer={[commentsReducer, addCommentFormReducer]}
        removeAfterUnmount
      >
        <Comments articleId={articleId} />
      </DynamicSliceLoader>
    </RenderOnViewportEntry>
  )
})
