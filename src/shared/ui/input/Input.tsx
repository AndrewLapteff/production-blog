import { ChangeEvent, HtmlHTMLAttributes, memo } from 'react'
import './Input.scss'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  value: number | string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export const Input = memo(
  ({ children, value, onChange, ...rest }: InputProps) => {
    return (
      <label className="custom-field two">
        <input
          onChange={onChange}
          value={value}
          type="text"
          placeholder=" "
          {...rest}
        />
        <span className="placeholder">{children}</span>
      </label>
    )
  }
)
