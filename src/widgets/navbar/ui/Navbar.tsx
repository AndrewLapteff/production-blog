import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'
import { Button } from 'shared/ui/button/Button'
import { Suspense, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, logout } from 'entities/User'
import { AuthModalAsync } from 'features/auth-by-username/ui/auth-modal/ui/AuthModal.async'
import { DynamicSliceLoader } from 'shared/lib/components/dymanic-loader/DynamicSliceLoader'
import { loginReducer } from 'features/auth-by-username'

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState(false)
  const userInfo = useSelector(getUser)
  const dispatch = useDispatch()

  const logoutHandler = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  const openHandler = () => {
    setOpen(true)
  }

  return (
    <nav className={classNames(s.navbar)}>
      <div className={classNames(s.links)}>
        <AppLink theme="primary" to="/">
          {t('main', { ns: 'main' })}
        </AppLink>
        <AppLink theme="primary" to="/about">
          {t('about', { ns: 'about' })}
        </AppLink>
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
              <AuthModalAsync width={25} isOpen={isOpen} setOpen={setOpen} />
            </DynamicSliceLoader>
          )}
        </Suspense>
      </div>
    </nav>
  )
}
