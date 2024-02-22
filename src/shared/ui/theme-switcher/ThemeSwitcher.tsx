import { useTheme } from 'app/providers/theme-provider'
import s from './ThemeSwitcher.module.scss'
import Sun from '../../assets/icons/sun.svg'
import Moon from '../../assets/icons/moon.svg'
import { CSSProperties, memo } from 'react'
import { Button } from '../button/Button'

interface ThemeSwitcherProps {
  className?: CSSProperties
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, changeTheme } = useTheme()

  return (
    <Button
      size="m"
      variant="icon"
      className={s['theme-switcher']}
      style={className}
      onClick={changeTheme}
    >
      {theme === 'light' ? (
        <Moon width={20} height={20} />
      ) : (
        <Sun width={25} color="white" height={25} />
      )}
    </Button>
  )
})
