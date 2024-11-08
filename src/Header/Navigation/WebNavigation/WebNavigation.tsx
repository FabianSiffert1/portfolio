import { NavLink } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigationWrapper}>
      <nav>
        <div className={styles.webNavigation}>
          <div className={styles.about}>
            <NavLink to={`about`} style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: 'underline'
                }
                : {}
            }>about</NavLink>
          </div>
          <div className={styles.projects}>
            <NavLink to={`projects`} style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: 'underline'
                }
                : {}
            }>projects</NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}
