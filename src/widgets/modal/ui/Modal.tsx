/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, memo, ReactNode, SetStateAction, useCallback } from 'react'
import s from './Modal.module.scss'
import { classNames, useKeyPress } from 'shared/lib'
import { Portal } from 'widgets/portal'
import { useTheme } from 'app/providers/theme-provider'

export interface ModalProps {
  children: ReactNode
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  header: string | ReactNode
  controls: string | ReactNode
  width?: number
}

export const Modal = memo((props: ModalProps) => {
  const { header, children, controls, isOpen, setOpen, width = 45 } = props
  const { theme } = useTheme()

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
    <Portal>
      <div
        onClick={onClose}
        className={classNames(s['app-modal'], mode, [theme, 'app-modal'])}
      >
        <div onClick={stopPropagation} className={classNames(s.content)}>
          <h1 className={classNames(s.header)}>{header}</h1>
          <div
            style={{ width: window.innerWidth * (width / 100) }}
            className={classNames(s.main)}
          >
            {children}
          </div>
          <div className={classNames(s.footer)}>{controls}</div>
        </div>
      </div>
    </Portal>
  )
})
