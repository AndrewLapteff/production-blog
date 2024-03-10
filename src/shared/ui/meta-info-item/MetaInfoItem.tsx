import s from './MetaInfoItem.module.scss'
import { memo, ReactNode } from 'react'

interface MetaInfoItemProps {
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  value?: ReactNode
  text?: string
  size?: number
}

export const MetaInfoItem = memo((props: MetaInfoItemProps) => {
  const { Svg, value, text, size = 20 } = props

  const fontSize = size - 3

  return (
    <div className={s['meta-info-item']}>
      <Svg height={size} width={size} />
      <span style={{ fontSize }}>{value}</span>
      <span style={{ fontSize }}>{text}</span>
    </div>
  )
})
