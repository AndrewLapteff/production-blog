import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'
import { Button } from 'shared/ui/button/Button'
import { Modal } from 'widgets/modal'
import { useState } from 'react'
import { Input } from 'shared/ui/input'
import { AuthModal } from 'widgets/auth-modal'

export const Navbar = () => {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState(false)

  const click = () => {
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
        <Button size="m" variant="background" onClick={click}>
          {t('login')}
        </Button>
        <AuthModal width={25} isOpen={isOpen} setOpen={setOpen} />
      </div>
    </nav>
  )
}
