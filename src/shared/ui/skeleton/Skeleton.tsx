import { CSSProperties } from 'react'
import s from './Skeleton.module.scss'
import { classNames } from 'shared/lib'

interface SkeletonProps {
  width?: number
  height?: number
}

export const Skeleton = ({ height, width, ...rest }: SkeletonProps) => {
  const styles: CSSProperties = {
    height,
    width
  }

  return <div style={styles} {...rest} className={classNames(s.skeleton)}></div>
}
