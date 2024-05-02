import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { THEME, ThemeContext } from '../lib/ThemeContext'

interface ThemeProviderProps extends PropsWithChildren {}

export const THEME_LOCAL_STORAGE_KEY = 'theme'

const defaultTheme =
  (localStorage.getItem(THEME_LOCAL_STORAGE_KEY) as THEME) || 'light'

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<THEME>(defaultTheme)

  const values = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}
