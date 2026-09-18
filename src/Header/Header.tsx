import styles from './Header.module.scss'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
          <div className={styles.webNavigation}>
            <WebNavigation />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.mobileNavigation}>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </div>
  )
}
