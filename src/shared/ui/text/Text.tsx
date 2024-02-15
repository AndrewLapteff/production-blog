import s from './Text.module.scss'
import { classNames } from 'shared/lib'

type ThemeProps = 'normal' | 'error'

interface TextProps {
  title?: string
  text?: string
  theme?: ThemeProps
  className?: string
}

export const Text = ({ title, text, theme, className }: TextProps) => {
  return (
    <div
      className={classNames(s['text-wrapper'], { [s[theme]]: true }, [
        className
      ])}
    >
      {title && <h1 className={classNames(s.title)}>{title}</h1>}
      {text && <p className={classNames(s.text)}>{text}</p>}
    </div>
  )
}
