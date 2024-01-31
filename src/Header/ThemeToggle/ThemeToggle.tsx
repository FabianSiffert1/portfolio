import { useContext } from 'react'
import { iconMoon } from '../../util/_globalAssetImports'
import { ThemeContext } from '../../util/theme/ThemeProvider'
import styles from './ThemeToggle.module.scss'

export default function ThemeToggle() {
  const themeContext = useContext(ThemeContext)
  return (
    <div className={styles.themeToggle} onClick={themeContext.toggleTheme}>
      <img src={iconMoon} alt={'Theme Toggle'} style={{ filter: themeContext.darkTheme ? 'invert(1)' : 'none' }} />
    </div>
  )
}
