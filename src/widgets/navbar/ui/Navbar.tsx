import s from './Navbar.module.scss'
import { ReactNode, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib'
import { AppLink, ThemeSwitcher, TranslateButton, HStack } from 'shared/ui'
import { User } from 'entities/User'
import { routerConfig } from 'shared/config'
import { NotificationsButton } from 'features/notifications-button'
import { SettingsButton } from 'features/settings-button'

interface NavbarProps {
  user: User
}

export const Navbar = ({ user }: NavbarProps) => {
  const { username, id } = user
  const isSigned = !!user
  const { t } = useTranslation('translation')

  const links: ReactNode[] = useMemo(() => {
    const result: ReactNode[] = []

    ;(() => {
      Object.entries(routerConfig).forEach(
        ([name, { path, hide = false, authOnly, roles }]) => {
          if (!isSigned && authOnly) return

          if (hide) return
          result.push(
            <AppLink key={path} theme="primary" to={path || ''}>
              {t(name)}
            </AppLink>
          )
        }
      )
    })()

    return result
  }, [t, isSigned])

  return (
    <nav className={classNames(s.navbar)}>
      <HStack role="navigation" className={classNames(s.links)}>
        {links}
        <NotificationsButton profileId={id} />
        <ThemeSwitcher />
        <TranslateButton />
        <SettingsButton username={username} />
      </HStack>
    </nav>
  )
}
