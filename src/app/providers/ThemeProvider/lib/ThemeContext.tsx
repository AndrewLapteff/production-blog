import { createContext } from 'react'

export type THEME = 'light' | 'dark'

interface ThemeContextProps {
  theme: THEME
  setTheme: (theme: THEME) => void
}

// @ts-ignore
export const ThemeContext = createContext<ThemeContextProps>({})
