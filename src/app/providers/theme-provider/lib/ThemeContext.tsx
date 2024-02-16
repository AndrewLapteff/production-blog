import { createContext } from 'react'

export type THEME = 'light' | 'dark'

interface ThemeContextProps {
  theme: THEME
  setTheme: (theme: THEME) => void
}

// @ts-expect-error
export const ThemeContext = createContext<ThemeContextProps>({})
