import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Header/Header'
import { ThemeContext } from '../../ui/theme/themeContext'
import styles from './Layout.module.scss'

export default function Layout() {
  const { darkTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.pageContainer}>
        <Outlet />
      </main>
    </div>
  )
}
