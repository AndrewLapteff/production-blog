import { ReactNode, Suspense, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { loginReducer, AuthModal } from 'features/auth-by-username'
import { DynamicSliceLoader, classNames } from 'shared/lib'
import {
  AppLink,
  ThemeSwitcher,
  TranslateButton,
  Button,
  HStack
} from 'shared/ui'
import { getUser, logout } from 'entities/User'
import s from './Navbar.module.scss'
import { routerConfig, routes } from 'shared/config'
import { Dropdown, DropDownItem } from 'shared/ui/dropdown/Dropdown'
import SettingsIcon from 'shared/assets/icons/settings.svg'
import LogoutIcon from 'shared/assets/icons/logout.svg'

interface NavbarProps {
  isSigned: boolean
  username: string
}

export const Navbar = ({ isSigned, username }: NavbarProps) => {
  const { t } = useTranslation('translation')
  const [isOpen, setOpen] = useState(false)
  const userInfo = useSelector(getUser)
  const dispatch = useDispatch()

  const openHandler = () => {
    setOpen(true)
  }

  const dropdownItems = useMemo((): DropDownItem[] => {
    return [
      { content: 'Profile', href: routes.profile, icon: SettingsIcon },
      {
        content: 'Quit',
        onClick: () => {
          dispatch(logout())
        },
        icon: LogoutIcon
      }
    ]
  }, [dispatch])

  const links: ReactNode[] = useMemo(() => {
    const result: ReactNode[] = []

    ;(() => {
      Object.entries(routerConfig).forEach(
        ([name, { path, hide = false, authOnly }]) => {
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
      <HStack
        align="center"
        gap="medium"
        justify="end"
        role="navigation"
        className={classNames(s.links)}
      >
        {links}
        <ThemeSwitcher />
        <TranslateButton />
        {userInfo.email === '' ? (
          <Button size="m" variant="background" onClick={openHandler}>
            {t('login')}
          </Button>
        ) : (
          <Dropdown
            title={username}
            items={dropdownItems}
            label={<SettingsIcon width={23} height={23} />}
          />
        )}
        <Suspense>
          {isOpen && (
            <DynamicSliceLoader
              name="loginReducer"
              reducer={loginReducer}
              removeAfterUnmount
            >
              <AuthModal width={25} isOpen={isOpen} setOpen={setOpen} />
            </DynamicSliceLoader>
          )}
        </Suspense>
      </HStack>
    </nav>
  )
}
