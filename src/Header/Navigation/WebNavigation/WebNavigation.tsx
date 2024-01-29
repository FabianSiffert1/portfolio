import styles from './WebNavigation.module.scss'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li>
            <Link to={``}>Home</Link>
          </li>
          <li>
            <Link to={`inventory`}>Inventory</Link>
          </li>
          <li>
            <Link to={`market`}>Market</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
