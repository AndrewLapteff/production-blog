import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { THEME_LOCAL_STORAGE_KEY } from '../ui/ThemeProvider'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem(THEME_LOCAL_STORAGE_KEY, newTheme)
  }

  return { theme, changeTheme }
}
