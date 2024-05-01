import { CSSProperties, HTMLAttributes } from 'react'
import s from './Skeleton.module.scss'
import { classNames } from 'shared/lib'

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number
  borderRadius?: number
  max?: boolean
}

export const Skeleton = ({
  height,
  width,
  max,
  borderRadius = 10,
  ...rest
}: SkeletonProps) => {
  const styles: CSSProperties = {
    height,
    width,
    borderRadius
  }

  const modes = {
    [s.max]: max
  }

  return (
    <div
      style={styles}
      {...rest}
      className={classNames(s.skeleton, modes)}
    ></div>
  )
}
