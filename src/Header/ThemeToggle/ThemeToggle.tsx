import styles from './ThemeToggle.module.scss'
import { iconSun } from '../../util/_globalAssetImports'
interface ThemeToggleProps {
  toggleTheme: () => void
}

export default function ThemeToggle(props: ThemeToggleProps) {
  return <div className={styles.themeToggle} onClick={props.toggleTheme}>
     Toggle Theme
  </div>
}