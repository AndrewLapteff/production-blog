import s from './Popover.module.scss'
import { classNames, useClickOutside } from 'shared/lib'
import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react'

interface PopoverProps {
  children?: ReactNode
}

interface TriggerProps {
  children: ReactElement
}

const PopoverContext = createContext({
  isOpen: false,
  setOpen: (isOpen: boolean) => {}
})

export const Popover = (props: PopoverProps) => {
  const { children } = props
  const [isOpen, setOpen] = useState(false)
  const popoverRef = useRef(null)

  useClickOutside(popoverRef, () => {
    if (isOpen) setOpen(false)
  })

  return (
    <PopoverContext.Provider value={{ isOpen, setOpen }}>
      <div ref={popoverRef} className={classNames(s.popover)}>
        {children}
      </div>
    </PopoverContext.Provider>
  )
}

const Trigger = (props: TriggerProps) => {
  const { children } = props
  const { isOpen, setOpen } = useContext(PopoverContext)

  const onClick = () => {
    setOpen(!isOpen)
  }

  const childrenToTriggerPopover = cloneElement(children, {
    onClick
  })

  return childrenToTriggerPopover
}

const Content = (props: PopoverProps) => {
  const { children } = props
  const [isContentMounted, setIsContentMounted] = useState(false)
  const { isOpen } = useContext(PopoverContext)

  useEffect(() => {
    if (isOpen && !isContentMounted) {
      setIsContentMounted(true)
    }
  }, [isOpen])

  const modes = {
    [s.active]: isOpen
  }

  if (!isContentMounted) return null

  return <div className={classNames(s.content, modes)}>{children}</div>
}

const Close = (props: TriggerProps) => {
  const { children } = props
  const { setOpen } = useContext(PopoverContext)

  const onClick = () => {
    setOpen(false)
  }

  const childrenToClosePopover = cloneElement(children, {
    onClick
  })

  return <div className={s.close}>{childrenToClosePopover}</div>
}

Popover.Trigger = Trigger
Popover.Content = Content
Popover.Close = Close
