import { Outlet } from 'react-router-dom'
import styles from './Home.module.scss'
import { ThemeContext } from '../../util/theme/ThemeProvider'
import { useContext, useEffect } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

export default function Home() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <Header/>
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
