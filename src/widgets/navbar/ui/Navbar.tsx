import { ReactNode, Suspense, useCallback, useMemo, useState } from 'react'
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
import { routerConfig } from 'shared/config'

interface NavbarProps {
  isSigned: boolean
}

export const Navbar = ({ isSigned }: NavbarProps) => {
  const { t } = useTranslation('translation')
  const [isOpen, setOpen] = useState(false)
  const userInfo = useSelector(getUser)
  const dispatch = useDispatch()

  const logoutHandler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const openHandler = () => {
    setOpen(true)
  }

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
          <Button size="m" variant="background" onClick={logoutHandler}>
            {t('logout')}
          </Button>
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
