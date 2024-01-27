import { Outlet } from 'react-router-dom'
import styles from './Home.module.scss'
import { ThemeContext } from '../../theme/ThemeProvider'
import { useContext, useEffect } from 'react'
import Navigation from '../../navigation/Navigation'

export default function Home() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <>
      <div className={styles.header}>
        <Navigation />
      </div>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Welcome to the app</h2>
          <p className={styles.text__primary}>Primary texts</p>
          <p className={styles.text__secondary}>Secondary texts</p>
        </div>
        <button className={styles.button} onClick={toggleTheme}>
          Toggle Theme
        </button>
        <Outlet />
      </div>
    </>
  )
}
