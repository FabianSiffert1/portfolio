import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './MobileNavigation.module.scss'

const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? `${styles.navLink} ${styles.active}` : styles.navLink)

export default function MobileNavigation() {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false)

  const toggleHamburgerMenu = () => {
    setHamburgerMenuOpen((prevState) => !prevState)
  }

  const closeHamburgerMenu = () => {
    setHamburgerMenuOpen(false)
  }

  useEffect(() => {
    if (!hamburgerMenuOpen) {
      return
    }

    document.body.classList.add('no-scroll')

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHamburgerMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [hamburgerMenuOpen])

  return (
    <div className={styles.mobileNavigation}>
      <button
        type='button'
        className={styles.burgerButton}
        aria-expanded={hamburgerMenuOpen}
        aria-controls='mobile-navigation-menu'
        aria-label={hamburgerMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={toggleHamburgerMenu}
      >
        <span className={styles.burger} />
        <span className={styles.burger} />
        <span className={styles.burger} />
      </button>
      <nav id='mobile-navigation-menu' className={styles.navigationMenu} hidden={!hamburgerMenuOpen} aria-label='Main navigation'>
        <div className={styles.link}>
          <NavLink to='/' className={navLinkClass} onClick={closeHamburgerMenu}>
            about
          </NavLink>
        </div>
        <div className={styles.link}>
          <NavLink to='projects' className={navLinkClass} onClick={closeHamburgerMenu}>
            projects
          </NavLink>
        </div>
      </nav>
    </div>
  )
}
