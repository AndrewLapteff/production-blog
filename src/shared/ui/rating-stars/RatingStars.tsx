import s from './RatingStars.module.scss'
import { classNames } from 'shared/lib'
import { memo, useState } from 'react'
import Star from '../../assets/icons/star.svg'

interface RatingProps {
  stars: number
  rate: number
  size: number
  onSelect?: (star: number) => void
}

export const RatingStars = memo((props: RatingProps) => {
  const { stars, size, rate, onSelect } = props
  const [hoveredStar, setHoveredStar] = useState(0)
  const [selectedStar, setSelectedStar] = useState(rate ?? 0)

  const onHover = (star: number) => () => {
    setHoveredStar(star)
  }

  const onLeave = () => {
    setHoveredStar(0)
  }

  const onSelectStar = (star: number) => () => {
    if (selectedStar === 0) {
      onSelect?.(star)
      setSelectedStar(star)
    }
  }

  const modes = {
    [s['is-selected']]: selectedStar > 0
  }

  return (
    <div className={classNames(s.rating)}>
      {Array.from({ length: stars }).map((_, i) => (
        <Star
          className={classNames('', modes, [
            i < (selectedStar || hoveredStar) ? s['hovered-star'] : ''
          ])}
          onMouseEnter={onHover(i + 1)}
          onMouseLeave={onLeave}
          onClick={onSelectStar(i + 1)}
          key={i}
          height={size}
          width={size}
        />
      ))}
    </div>
  )
})
