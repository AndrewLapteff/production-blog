import { HtmlHTMLAttributes, memo } from 'react'
import s from './Text.module.scss'
import { classNames } from 'shared/lib'

type ThemeProps = 'normal' | 'error'

type ButtonSize = 's' | 'm' | 'l'

interface TextProps extends HtmlHTMLAttributes<HTMLParagraphElement> {
  title?: string
  text?: string
  theme?: ThemeProps
  className?: string
  size?: ButtonSize
}

export const Text = memo(
  ({ title, text, theme = 'normal', className, size = 'm' }: TextProps) => {
    return (
      <div
        className={classNames(s['text-wrapper'], { [s[theme]]: true }, [
          className,
          s[size]
        ])}
      >
        {title && <h1 className={classNames(s.title)}>{title}</h1>}
        {text && <p className={classNames(s.text)}>{text}</p>}
      </div>
    )
  }
)
