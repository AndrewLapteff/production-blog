import { HtmlHTMLAttributes, memo } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib'
import { Align, Mods, Size, ThemeProps } from 'shared/types/types'

type TitleSemanticSize = 'h1' | 'h2' | 'h3'

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  text?: string
  theme?: ThemeProps
  className?: string
  size?: Size
  align?: Align
  h?: TitleSemanticSize
}

export const Text = memo(
  ({
    text,
    className,
    theme = 'normal',
    size = 'm',
    align = 'left',
    h = 'h2'
  }: TextProps) => {
    const mods: Mods = {
      [s[theme]]: true,
      [s[size]]: true,
      [s[align]]: true
    }

    return <p className={classNames(s.text, mods, [className])}>{text}</p>
  }
)
