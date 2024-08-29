import { NavLink } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li key={'about'}>
            <NavLink to={`about`} style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: 'underline'
                }
                : {}
            }>about</NavLink>
          </li>
          <li key={'projects'} >
            <NavLink to={`projects`} style={({ isActive }) =>
              isActive
                ? {
                  textDecoration: 'underline',
                }
                : {}
            }>projects</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
