import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'

export const Navbar = () => {
  const { t } = useTranslation()

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
      </div>
    </nav>
  )
}
