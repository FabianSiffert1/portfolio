import styles from './Header.module.scss'
import Title from './Title/Title'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'

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
