import styles from './MobileNavigation.module.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function MobileNavigation() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className={styles.mobileNavigation} onClick={toggleHamburger}>
      <div className={styles.burger} />
      <div className={styles.burger} />
      <div className={styles.burger} />
      <div className={styles.hamburgerMenu} style={{ display: hamburgerOpen ? 'inline' : 'none' }}>
        <nav>
          <ul>
            <li>
              <Link to={`inventory`}>Inventory</Link>
            </li>
            <li>
              <Link to={`market`}>Market</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
