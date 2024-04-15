import { Skeleton } from 'shared/ui/skeleton/Skeleton'
import s from './ArticleSkeleton.module.scss'
import { HStack, VStack } from 'shared/ui'

const width = 680

export const ArticleSkeleton = () => {
  return (
    <VStack gap="large" align="start" className={s.article}>
      <Skeleton width={width} height={50} />
      <HStack align="center" gap="none">
        <Skeleton borderRadius={50} width={45} height={43} />
        <VStack justify="end" align="start" gap="small">
          <Skeleton width={45} height={16} />
          <Skeleton width={100} height={16} />
        </VStack>
      </HStack>
      <Skeleton width={270} height={20} />
      <Skeleton width={700} height={200} />
      <Skeleton width={700} height={25} />
      <Skeleton width={700} height={100} />
      <Skeleton width={700} height={100} />
    </VStack>
  )
}
