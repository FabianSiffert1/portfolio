import React, { useEffect, useState } from 'react'
import { ThemeContext } from './themeContext'

const DARK_SCHEME_QUERY = '(prefers-color-scheme: dark)'

interface Props {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(() => window.matchMedia(DARK_SCHEME_QUERY).matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(DARK_SCHEME_QUERY)
    const handleChange = (event: MediaQueryListEvent) => {
      setDarkTheme(event.matches)
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return <ThemeContext.Provider value={{ darkTheme: darkTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
