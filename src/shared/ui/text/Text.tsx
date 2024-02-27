import { HtmlHTMLAttributes, memo, useCallback } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib'
import { Mods } from 'shared/types/types'

type ThemeProps = 'normal' | 'error'

type ButtonSize = 's' | 'm' | 'l'

type TitleSemanticSize = 'h1' | 'h2' | 'h3'

type Align = 'left' | 'right' | 'center'

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  title?: string
  text?: string
  theme?: ThemeProps
  className?: string
  size?: ButtonSize
  align?: Align
  h?: TitleSemanticSize
}

export const Text = memo(
  ({
    title,
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

    const renderTitle = useCallback((h: TitleSemanticSize, title: string) => {
      switch (h) {
        case 'h1':
          return <h1 className={classNames(s.title)}>{title}</h1>
        case 'h2':
          return <h2 className={classNames(s.title)}>{title}</h2>
        case 'h3':
          return <h3 className={classNames(s.title)}>{title}</h3>
      }
    }, [])

    return (
      <>
        {title && renderTitle(h, title)}
        {text && (
          <p className={classNames(s.text, mods, [className])}>{text}</p>
        )}
      </>
    )
  }
)
