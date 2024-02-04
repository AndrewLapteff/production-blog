import { useTranslation } from 'react-i18next'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'

export const Navbar = () => {
  const { t } = useTranslation()

  return (
    <nav className={classNames(s.navbar)}>
      <div className={classNames(s.links)}>
        <AppLink theme="primary" to="/">
          a
        </AppLink>
        <AppLink theme="primary" to="/about">
          {t('about')}
        </AppLink>
        <ThemeSwitcher />
        <TranslateButton />
      </div>
    </nav>
  )
}
