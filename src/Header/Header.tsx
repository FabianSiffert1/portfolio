import styles from './Header.module.scss'
import Title from './Title/Title'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'

interface HeaderProps {
  toggleTheme: () => void
}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <Title />
      <div className={styles.mobileNavigation}>
        <MobileNavigation toggleTheme={props.toggleTheme} />
      </div>
      <div className={styles.webNavigation}>
        <WebNavigation toggleTheme={props.toggleTheme} />
      </div>
    </div>
  )
}
