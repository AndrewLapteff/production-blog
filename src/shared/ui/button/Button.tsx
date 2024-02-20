import { HtmlHTMLAttributes, memo } from 'react'
import s from './Button.module.scss'
import { classNames } from 'shared/lib'
import { Mods } from 'shared/types/types'

type ButtonVariants =
  | 'clear'
  | 'primary'
  | 'icon'
  | 'outline'
  | 'background'
  | 'red'

type ButtonSize = 's' | 'm' | 'l'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    children,
    variant = 'primary',
    size = 'm',
    disabled = false,
    ...rest
  } = props

  const modes: Mods = {
    [s.disabled]: disabled,
    [s[size]]: true,
    [s[variant]]: true
  }

  return (
    <button
      disabled={disabled}
      type="button"
      className={classNames(s.button, modes)}
      {...rest}
    >
      {children}
    </button>
  )
})
