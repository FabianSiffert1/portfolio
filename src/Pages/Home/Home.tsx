import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import HeaderProvider from '../../Header/HeaderProvider'
import { ThemeContext } from '../../util/ui/theme/ThemeProvider'
import styles from './Home.module.scss'

export default function Home() {
  const { darkTheme } = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light')
  }, [darkTheme])
  return (
    <div className={styles.home}>
      <HeaderProvider>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.pageContainer}>
          <Outlet />
        </div>
        <div className={styles.footer}>
          <Footer />
        </div>
      </HeaderProvider>
    </div>
  )
}
