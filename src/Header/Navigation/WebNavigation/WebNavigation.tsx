import styles from './WebNavigation.module.scss'
import { Link } from 'react-router-dom'
import ThemeToggle from '../../ThemeToggle/ThemeToggle'
interface WebNavigationProps {
  toggleTheme: () => void
}
export default function WebNavigation(props: WebNavigationProps) {
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
      <ThemeToggle toggleTheme={props.toggleTheme}/>
    </div>)
}
