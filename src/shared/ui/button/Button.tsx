import { HtmlHTMLAttributes } from 'react'
import s from './Button.module.scss'
import { classNames } from 'shared/lib'

type ButtonVariants = 'clear' | 'primary' | 'icon' | 'outline' | 'background'

type ButtonSize = 's' | 'm' | 'l'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
  size: ButtonSize
}

export const Button = ({ children, variant, size, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(s.button, {}, [s[variant], s[size]])}
      {...rest}
    >
      {children}
    </button>
  )
}
