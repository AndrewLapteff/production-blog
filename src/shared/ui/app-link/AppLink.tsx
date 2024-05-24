import { Link, LinkProps } from 'react-router-dom'
import s from './AppLink.module.scss'
import { memo } from 'react'
import { classNames } from 'shared/lib'

type AppLinkThemes = 'primary' | 'secondary'

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkThemes
  'data-testid'?: string
}

export const AppLink = memo((props: AppLinkProps) => {
  const {
    children,
    to,
    theme = 'primary',
    'data-testid': dataTestId,
    ...rest
  } = props

  return (
    <Link
      data-testid={dataTestId + '.link'}
      className={classNames(s.applink, {}, [s[theme]])}
      to={to}
      {...rest}
    >
      {children}
    </Link>
  )
})
