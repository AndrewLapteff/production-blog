import { ChangeEvent, HtmlHTMLAttributes } from 'react'
import './Input.scss'

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement> {
  value: number | string
  onChange: (value: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ children, value, onChange }: InputProps) => {
  return (
    <label className="custom-field two">
      <input onChange={onChange} value={value} type="text" placeholder=" " />
      <span className="placeholder">{children}</span>
    </label>
  )
}
