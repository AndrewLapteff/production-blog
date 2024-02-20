import {
  ChangeEvent,
  HTMLInputTypeAttribute,
  HtmlHTMLAttributes,
  memo
} from 'react'
import './Input.scss'
import { classNames } from 'shared/lib'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  value: number | string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
  readonly?: boolean
  type?: HTMLInputTypeAttribute
}

export const Input = memo(
  ({
    children,
    value,
    onChange,
    readonly,
    type = 'text',
    ...rest
  }: InputProps) => {
    return (
      <label className="custom-field two">
        <input
          onChange={onChange}
          value={value}
          type={type}
          placeholder=" "
          readOnly={readonly}
          className={classNames(undefined, { readonly })}
          {...rest}
        />
        <span className="placeholder">{children}</span>
      </label>
    )
  }
)
