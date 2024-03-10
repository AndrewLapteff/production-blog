import { CSSProperties, HTMLAttributes } from 'react'
import s from './Skeleton.module.scss'
import { classNames } from 'shared/lib'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  borderRadius?: number
}

export const Skeleton = ({
  height,
  width,
  borderRadius = 10,
  ...rest
}: SkeletonProps) => {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius
  }

  return <div style={styles} {...rest} className={classNames(s.skeleton)}></div>
}
