/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dispatch, memo, ReactNode, SetStateAction, useCallback } from 'react'
import s from './Drawer.module.scss'
import { classNames, useKeyPress } from 'shared/lib'
import { Portal } from 'widgets/portal'
import { useTheme } from 'app/providers/theme-provider'

export interface DrawerProps {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  width?: number
  children?: ReactNode
}

const width = 100

export const Drawer = memo((props: DrawerProps) => {
  const { children, isOpen, setOpen } = props
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
        className={classNames(s['app-drawer'], mode, [theme, 'app-drawer'])}
      >
        <div onClick={stopPropagation} className={classNames(s.content)}>
          <div
            style={{ width: window.innerWidth * (width / 100) }}
            className={classNames(s.main)}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
})
