import s from './Dropdown.module.scss'
import { classNames, useClickOutside } from 'shared/lib'
import { memo, ReactNode, useRef, useState } from 'react'
import { Button } from '../button/Button'
import { AppLink } from '../app-link/AppLink'
import { Title } from '../title/Title'

export interface DropDownItem {
  content: string
  href?: string
  icon?: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  onClick?: () => void
  disabled?: boolean
}

interface DropdownProps {
  label: string | ReactNode
  title: string
  items: DropDownItem[]
}

export const Dropdown = memo((props: DropdownProps) => {
  const { label, items, title } = props
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
        <li className={s.item}>
          <Title size="s" h="h4" align="center">
            {title}
          </Title>
        </li>
        {items.map((item) => {
          const Icon = item.icon
          return (
            <li className={s.item} key={item.content}>
              <AppLink
                onClick={() => {
                  setOpen(false)
                  item.onClick && item.onClick()
                }}
                className={s['item-link']}
                to={item.href ?? '#'}
              >
                {Icon && <Icon className={s.svg} width={18} height={18} />}
                {item.content}
              </AppLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
})
