/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, memo, ReactNode, SetStateAction, useCallback } from 'react'
import s from './Modal.module.scss'
import { classNames, useKeyPress } from 'shared/lib'

export interface ModalProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  header: string | ReactNode
  main: string | ReactNode
  footer: string | ReactNode
  width?: number
}

export const Modal = memo((props: ModalProps) => {
  const { header, main, footer, isOpen, setOpen, width = 45 } = props

  const mode: Record<string, boolean> = {
    [s.open]: isOpen
  }

  const onClose = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  useKeyPress({ onKeyDown: { callback: onClose, key: 'Escape', once: true } })

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <div onClick={onClose} className={classNames(s.wrapper, mode)}>
      <div onClick={stopPropagation} className={classNames(s.content)}>
        <h1 className={classNames(s.header)}>{header}</h1>
        <div
          style={{ width: window.innerWidth * (width / 100) }}
          className={classNames(s.main)}
        >
          {main}
        </div>
        <div className={classNames(s.footer)}>{footer}</div>
      </div>
    </div>
  )
})
