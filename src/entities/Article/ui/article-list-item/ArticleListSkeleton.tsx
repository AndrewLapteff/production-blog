import s from '../article-list-item/ArticleListItem.module.scss'
import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import { classNames } from 'shared/lib'
import { ArticleView } from '../../../Article'
import { HStack } from 'shared/ui'

interface ArticleListItemSkeletonProps {
  view: ArticleView
}

export const ArticleListItemSkeleton = ({
  view
}: ArticleListItemSkeletonProps) => {
  if (view === 'classic') {
    return (
      <div className={classNames(s.article)}>
        <Skeleton width={700} height={213} />
        <Skeleton width={700} height={53} />

        <HStack className={s['meta-info']}>
          <Skeleton borderRadius={50} width={50} height={40} />
          <div style={{ width: 500 }}>
            <Skeleton width={60} height={17} />
          </div>
          <Skeleton width={70} height={17} />
          <Skeleton width={70} height={17} />
          <Skeleton width={140} height={17} />
        </HStack>
        <Skeleton width={700} height={100} />
      </div>
    )
  } else {
    return (
      <div className={classNames(s.article, {}, [s[view]])}>
        <Skeleton width={700} height={213} />
        <Skeleton width={700} height={20} />
        <HStack className={s['meta-info']}>
          <Skeleton width={50} height={16} />
          <Skeleton width={50} height={16} />
          <Skeleton width={100} height={16} />
        </HStack>
      </div>
    )
  }
}
