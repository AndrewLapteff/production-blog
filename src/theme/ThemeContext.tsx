import { createContext } from 'react'

export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

interface ThemeContextProps {
  theme: THEME
  setTheme: (theme: THEME) => void
}

// @ts-ignore
export const ThemeContext = createContext<ThemeContextProps>({})
