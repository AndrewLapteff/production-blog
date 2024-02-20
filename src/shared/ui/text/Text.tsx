import { HtmlHTMLAttributes, memo } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib'
import { Mods } from 'shared/types/types'

type ThemeProps = 'normal' | 'error'

type ButtonSize = 's' | 'm' | 'l'

type Align = 'left' | 'right' | 'center'

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  title?: string
  text?: string
  theme?: ThemeProps
  className?: string
  size?: ButtonSize
  align?: Align
}

export const Text = memo(
  ({
    title,
    text,
    className,
    theme = 'normal',
    size = 'm',
    align = 'left'
  }: TextProps) => {
    const mods: Mods = {
      [s[theme]]: true,
      [s[size]]: true,
      [s[align]]: true
    }

    return (
      <div className={classNames(s['text-wrapper'], mods, [className])}>
        {title && <h1 className={classNames(s.title)}>{title}</h1>}
        {text && <p className={classNames(s.text)}>{text}</p>}
      </div>
    )
  }
)
