import s from './Dropdown.module.scss'
import { classNames, useClickOutside } from 'shared/lib'
import { memo, ReactNode, useRef, useState } from 'react'
import { Button } from '../button/Button'
import { AppLink } from '../app-link/AppLink'

interface DropDownItems {
  content: string
  href: string
  onClick: () => void
  disabled?: boolean
}

interface DropdownProps {
  label: string | ReactNode
  items: DropDownItems[]
}

export const Dropdown = memo((props: DropdownProps) => {
  const { label, items } = props
  const [isOpen, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useClickOutside(dropdownRef, () => {
    if (isOpen) setOpen(false)
  })

  return (
    <div ref={dropdownRef} className={s.dropdown}>
      <Button
        variant="icon"
        onClick={() => {
          setOpen(!isOpen)
        }}
      >
        {label}
      </Button>
      <ul className={classNames(s['dropdown-menu'], { [s.active]: isOpen })}>
        {items.map((item) => {
          return (
            <li key={item.content}>
              <AppLink to={item.href}>{item.content}</AppLink>
            </li>
          )
        })}
        {/* <li className={s.item}></li>
        <li className={s.item}>
          <AppLink to="/">{'Settings'}</AppLink>
        </li>
        <li className={s.item}>
          <AppLink to="/">{'Exit'}</AppLink>
        </li> */}
      </ul>
    </div>
  )
})
