import styles from './Header.module.scss'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'
import Title from './Title/Title'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <Title />
      </div>
      <div className={styles.navigation}>
        <div className={styles.mobileNavigation}>
          <MobileNavigation />
        </div>
        <div className={styles.webNavigation}>
          <WebNavigation />
        </div>
      </div>
    </div>
  )
}
