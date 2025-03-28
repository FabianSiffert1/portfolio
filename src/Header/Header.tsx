import { useLayoutEffect, useRef } from 'react'
import styles from './Header.module.scss'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import WebNavigation from './Navigation/WebNavigation/WebNavigation'
import Title from './Title/Title'

export default function Header() {
  const componentRef = useRef<HTMLDivElement>(null)
  const handleDisplayStyleChange = () => {
    const widthThreshold = 1536

    if (componentRef.current?.offsetWidth && componentRef.current.offsetWidth < widthThreshold) {
      document.body.classList.remove('no-scroll')
    }
  }

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      handleDisplayStyleChange()
    })
    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.header} ref={componentRef}>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigation}>
          <div className={styles.webNavigation}>
            <WebNavigation />
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.mobileNavigation}>
            <MobileNavigation />
          </div>
        </div>
      </div>
    </div>
  )
}
