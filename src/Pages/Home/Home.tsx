import { Outlet } from 'react-router-dom'
import styles from './Home.module.scss'
import { ThemeContext } from '../../theme/ThemeProvider'
import { useContext, useEffect } from 'react'
import Header from '../../Header/Header'

export default function Home() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.home}>
      <Header toggleTheme={toggleTheme} />
      <Outlet />
    </div>
  )
}
