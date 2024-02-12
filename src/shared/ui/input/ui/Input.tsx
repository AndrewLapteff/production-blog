import { PropsWithChildren } from 'react'
import './Input.scss'

export const Input = ({ children }: PropsWithChildren) => {
  return (
    <label className="custom-field two">
      <input type="text" placeholder=" " />
      <span className="placeholder">{children}</span>
    </label>
  )
}
