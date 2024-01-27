import styles from './ThemeToggle.module.scss'

interface ThemeToggleProps {
  toggleTheme: () => void
}

export default function ThemeToggle(props: ThemeToggleProps) {
  return <div className={styles.themeToggle} onClick={props.toggleTheme}>
      Theme
  </div>
}