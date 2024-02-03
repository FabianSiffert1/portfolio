import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Inventory</Link>
          </li>
          <li>
            <Link to={`market`}>Market</Link>
          </li>
          <li>
            <div className={styles.themeToggle}>
              <ThemeToggle />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}
