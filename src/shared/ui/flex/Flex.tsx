import s from './Flex.module.scss'
import { classNames } from 'shared/lib'
import { ReactNode } from 'react'

type JustifyContentProps =
  | 'start'
  | 'end'
  | 'center'
  | 'space-between'
  | 'space-around'
type AlignContentProps = 'start' | 'end' | 'center' | 'stretch'
type DirectionProps = 'row' | 'column'
type GapProps = 'small' | 'medium' | 'large' | 'none'

export interface FlexProps {
  children: ReactNode
  direction: DirectionProps
  justify?: JustifyContentProps
  align?: AlignContentProps
  gap?: GapProps
  className?: string
  max?: boolean
}

const JustifyMapper: Record<JustifyContentProps, string> = {
  'space-around': 'justify-content-space-around',
  'space-between': 'justify-content-space-between',
  center: 'justify-content-center',
  end: 'justify-content-end',
  start: 'justify-content-start'
}

const AlignMapper: Record<AlignContentProps, string> = {
  start: 'align-items-start',
  end: 'align-items-end',
  center: 'align-items-center',
  stretch: 'align-items-stretch'
}

const DirectionMapper: Record<DirectionProps, string> = {
  row: 'flex-direction-row',
  column: 'flex-direction-column'
}

const GapMapper: Record<GapProps, string> = {
  small: 'gap-small',
  medium: 'gap-medium',
  large: 'gap-large',
  none: 'gap-none'
}

export const Flex = (props: FlexProps) => {
  const {
    align = 'start',
    direction,
    gap = 'medium',
    justify = 'start',
    className,
    max,
    children
  } = props

  const mappers = [
    className && className,
    s[JustifyMapper[justify]],
    s[AlignMapper[align]],
    s[DirectionMapper[direction]],
    s[GapMapper[gap]]
  ]

  const modes = {
    [s['max-width']]: max
  }

  return <div className={classNames(s.flex, modes, mappers)}>{children}</div>
}
