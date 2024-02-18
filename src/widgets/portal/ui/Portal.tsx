import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }: PropsWithChildren) => {
  const roolElement = document.getElementById('root')
  if (!roolElement) return
  return createPortal(children, roolElement)
}
