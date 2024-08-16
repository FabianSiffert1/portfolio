import { Link } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li key={'about'}>
            <Link to={`about`}>about</Link>
          </li>
          <li key={'projects'}>
            <Link to={`projects`}>projects</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
