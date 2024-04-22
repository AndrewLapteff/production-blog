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
  'data-testid'?: string
}

export const Input = memo(
  ({
    children,
    value,
    onChange,
    readonly,
    type = 'text',
    'data-testid': dataTestId,
    ...rest
  }: InputProps) => {
    return (
      <label className="custom-field two">
        <input
          data-testid={`${dataTestId}.input`}
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
