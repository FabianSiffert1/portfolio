import { useContext } from 'react'
import { iconMoon, iconSun } from '../../util/ui/_globalAssetImports'
import { ThemeContext } from '../../util/ui/theme/ThemeProvider'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext)
  return (
    <div className={styles.themeToggle} onClick={themeContext.toggleTheme}>
      <img
        src={themeContext.darkTheme ? iconSun : iconMoon}
        alt={'Theme Toggle'}
        style={{ filter: themeContext.darkTheme ? 'invert(1)' : 'none' }}
      />
    </div>
  )
}
