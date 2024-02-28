import { HtmlHTMLAttributes, PropsWithChildren, memo } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib'
import { Align, Mods, Size, ThemeProps } from 'shared/types/types'

interface TextProps
  extends HtmlHTMLAttributes<HTMLParagraphElement>,
    PropsWithChildren {
  theme?: ThemeProps
  className?: string
  size?: Size
  align?: Align
}

export const Text = memo(
  ({
    className,
    theme = 'normal',
    size = 'm',
    align = 'left',
    children
  }: TextProps) => {
    const mods: Mods = {
      [s[theme]]: true,
      [s[size]]: true,
      [s[align]]: true
    }

    return <p className={classNames(s.text, mods, [className])}>{children}</p>
  }
)
