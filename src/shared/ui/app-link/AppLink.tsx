import { Link, LinkProps } from 'react-router-dom'
import s from './AppLink.module.scss'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames'

type AppLinkThemes = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const { children, to, theme = 'primary', ...rest } = props

  return (
    <Link className={classNames(s.applink, {}, [s[theme]])} to={to} {...rest}>
      {children}
    </Link>
  )
}
