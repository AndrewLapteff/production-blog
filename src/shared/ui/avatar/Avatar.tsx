import { CSSProperties, HTMLAttributes, memo } from 'react'
import s from './Avatar.module.scss'
import { classNames } from 'shared/lib'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'

interface AvatarProps extends HTMLAttributes<HTMLImageElement> {
  size?: number
  src: string | undefined
  alt: string
  outline?: boolean
}

export const Avatar = memo(({ size = 100, src, alt, outline }: AvatarProps) => {
  const styles: CSSProperties = {
    width: size,
    height: size
  }

  return (
    <LazyLoadImage
      effect="opacity"
      style={styles}
      className={classNames(s.avatar, { [s.outline]: outline })}
      alt={alt}
      src={src}
    />
  )
})
