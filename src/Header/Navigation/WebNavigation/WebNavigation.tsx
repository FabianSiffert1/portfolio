import { NavLink } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)

export default function WebNavigation() {
  return (
    <div className={styles.webNavigationWrapper}>
      <nav aria-label='Main navigation'>
        <div className={styles.webNavigation}>
          <div className={styles.about}>
            <NavLink to='/' className={navLinkClass}>
              about
            </NavLink>
          </div>
          <div className={styles.projects}>
            <NavLink to='projects' className={navLinkClass}>
              projects
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
