import { useContext } from 'react'
import { ThemeContext, THEME } from '../theme/ThemeContext'
import { THEME_LOCAL_STORAGE_KEY } from '../theme/ThemeProvider'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    const newTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK
    setTheme(newTheme)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
  }

  return { theme, changeTheme }
}
