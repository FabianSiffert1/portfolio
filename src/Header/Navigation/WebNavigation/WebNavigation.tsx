import { Link } from 'react-router-dom'
import styles from './WebNavigation.module.scss'

export default function WebNavigation() {
  return (
    <div className={styles.webNavigation}>
      <nav>
        <ul>
          <li key={'about'}>
            <Link to={`about`}>About</Link>
          </li>
          <li key={'inventory'}>
            <Link to={`inventory`}>Inventory</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
