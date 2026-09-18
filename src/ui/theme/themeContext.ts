import { createContext } from 'react'

export interface ThemeContextProps {
  darkTheme: boolean
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkTheme: false
})
