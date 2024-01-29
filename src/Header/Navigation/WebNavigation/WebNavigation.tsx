import styles from './WebNavigation.module.scss'
import { Link } from 'react-router-dom'

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
        </ul>
      </nav>
    </div>
  )
}
