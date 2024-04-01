import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import s from './ArticleSkeleton.module.scss'

const width = 680

export const ArticleSkeleton = () => {
  return (
    <div className={s.article}>
      <Skeleton width={width} height={50} />
      <div className={s.avatar}>
        <Skeleton borderRadius={50} width={45} height={43} />
        <div className={s['avatar-info']}>
          <Skeleton width={45} height={16} />
          <Skeleton width={100} height={16} />
        </div>
      </div>
      <Skeleton width={270} height={20} />
      <Skeleton width={700} height={200} />
      <Skeleton width={700} height={25} />
      <Skeleton width={700} height={100} />
      <Skeleton width={700} height={100} />
    </div>
  )
}
