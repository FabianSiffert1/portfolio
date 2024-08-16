import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li key={'inventory'}>
            <Link to={`inventory`}>Inventory</Link>
          </li>
          <li key={'about'}>
            <Link to={`about`}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
