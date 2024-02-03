import { useTheme } from 'app/providers/ThemeProvider'
import s from './ThemeSwitcher.module.scss'
import Sun from '../../assets/sun.svg'
import Moon from '../../assets/moon.svg'
import { CSSProperties } from 'react'
import { Button } from '../button/Button'

interface ThemeSwitcher {
  className?: CSSProperties
}

export const ThemeSwitcher = ({ className }: ThemeSwitcher) => {
  const { theme, changeTheme } = useTheme()

  return (
    <Button variant="clear" className={s['theme-switcher']} style={className} onClick={changeTheme}>
      {theme === 'light' ? <Moon width={20} height={20} /> : <Sun width={25} height={25} />}
    </Button>
  )
}
