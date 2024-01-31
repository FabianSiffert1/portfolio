import styles from './Header.module.scss'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'
import Title from './Title/Title'

export default function Header() {
  return (
    <div className={styles.header}>
      <Title />
      <div className={styles.mobileNavigation}>
        <MobileNavigation />
      </div>
      <div className={styles.webNavigation}>
        <WebNavigation />
      </div>
    </div>
  )
}
