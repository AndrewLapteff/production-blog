import { HtmlHTMLAttributes } from 'react'
import s from './Button.module.scss'
import { classNames } from 'shared/lib'

type ButtonVariants = 'clear' | 'primary' | 'icon'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
}

export const Button = ({ children, variant, ...rest }: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(s.button, {}, [s[variant]])}
      {...rest}
    >
      {children}
    </button>
  )
}
