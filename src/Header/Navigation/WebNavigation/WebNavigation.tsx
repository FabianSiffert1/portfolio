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
          <Link to={`contacts/1`}>Your Name</Link>
        </li>
        <li>
          <Link to={`contacts/2`}>Your Friend</Link>
        </li>
        <li>
          <Link to={`market`}>Market</Link>
        </li>
          <li>
            <ThemeToggle toggleTheme={props.toggleTheme}/>
          </li>
        </ul>
      </nav>
    </div>)
}
