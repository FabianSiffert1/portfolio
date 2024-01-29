import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import { ThemeContext } from '../../util/theme/ThemeProvider'
import styles from './Home.module.scss'

export default function Home() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.page}>
        <Outlet />
      </div>
      <div className={styles.footer}>
        <Footer toggleTheme={toggleTheme} />
      </div>
    </div>
  )
}
