import { HtmlHTMLAttributes } from 'react'
import s from './Button.module.scss'
import { classNames } from 'shared/lib'

type ButtonVariants = 'clear' | 'primary' | 'icon' | 'outline' | 'background'

type ButtonSize = 's' | 'm' | 'l'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants
  size: ButtonSize
  disabled?: boolean
}

export const Button = (props: ButtonProps) => {
  const { children, variant, size, disabled = false, ...rest } = props

  const modes = {
    [s.disabled]: disabled
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(s.button, modes, [s[variant], s[size]])}
      {...rest}
    >
      {children}
    </button>
  )
}
