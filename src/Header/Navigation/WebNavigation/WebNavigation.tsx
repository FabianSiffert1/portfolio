import { NavLink } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

const activeStyle = ({ isActive }: { isActive: boolean }) => (isActive ? { textDecoration: 'underline' } : {})

export default function WebNavigation() {
  return (
    <div className={styles.webNavigationWrapper}>
      <nav aria-label='Main navigation'>
        <div className={styles.webNavigation}>
          <div className={styles.about}>
            <NavLink to='/' style={activeStyle}>
              about
            </NavLink>
          </div>
          <div className={styles.projects}>
            <NavLink to='projects' style={activeStyle}>
              projects
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
