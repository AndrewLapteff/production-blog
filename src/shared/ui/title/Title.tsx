import s from './Title.module.scss'
import { classNames } from '../../lib'
import {
  HtmlHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  memo,
  useCallback
} from 'react'
import { Align, Mods, Size, ThemeProps } from '../../types/types'

type TitleSemanticSize = 'h1' | 'h2' | 'h3'

interface TitleProps
  extends HtmlHTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  theme?: ThemeProps
  className?: string
  size?: Size
  align?: Align
  h?: TitleSemanticSize
}

export const Title = memo((props: TitleProps) => {
  const {
    children,
    theme = 'normal',
    className = '',
    size = 'm',
    align = 'left',
    h = 'h2'
  } = props

  const mods: Mods = {
    [s[theme]]: true,
    [s[size]]: true,
    [s[align]]: true
  }

  const renderTitle = useCallback(
    (
      h: TitleSemanticSize,
      children: ReactNode,
      mods: Mods,
      className: string
    ) => {
      switch (h) {
        case 'h1':
          return (
            <h1 className={classNames(s.title, mods, [className])}>
              {children}
            </h1>
          )
        case 'h2':
          return (
            <h2 className={classNames(s.title, mods, [className])}>
              {children}
            </h2>
          )
        case 'h3':
          return (
            <h3 className={classNames(s.title, mods, [className])}>
              {children}
            </h3>
          )
      }
    },
    []
  )

  return renderTitle(h, children, mods, className)
})
