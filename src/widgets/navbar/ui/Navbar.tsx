import { useTheme } from 'app/providers/ThemeProvider'
import s from './Navbar.module.scss'
import { classNames } from 'shared/lib/classNames'
import { AppLink, ThemeSwitcher } from 'shared/ui'
import { TranslateButton } from 'shared/ui/translate-button/TranslateButton'

export const Navbar = () => {
  return (
    <nav className={classNames(s.navbar)}>
      <div className={classNames(s.links)}>
        <AppLink theme="primary" to="/">
          Main
        </AppLink>
        <AppLink theme="primary" to="/about">
          About
        </AppLink>
        <ThemeSwitcher />
        <TranslateButton>Translate</TranslateButton>
      </div>
    </nav>
  )
}
