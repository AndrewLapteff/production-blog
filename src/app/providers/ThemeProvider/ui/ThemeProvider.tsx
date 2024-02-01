import { FC, useState } from 'react'
import { THEME, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps {
  children: React.ReactNode
}

export const THEME_LOCAL_STORAGE_KEY = 'theme'

const defaultTheme = (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as THEME) || THEME.LIGHT

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme)

  // const value = useMemo(() => {
  //   return { theme, setTheme }
  // }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
