import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Header/Header'
import { ThemeContext } from '../../ui/theme/ThemeProvider'
import styles from './Layout.module.scss'

export default function Layout() {
  const { darkTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.pageContainer}>
        <Outlet />
      </div>
    </div>
  )
}
