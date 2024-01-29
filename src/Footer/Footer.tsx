import styles from './Footer.module.scss'
import ThemeToggle from '../Header/ThemeToggle/ThemeToggle'

interface FooterProps {
  toggleTheme: () => void
}

export default function Footer(props: FooterProps) {
  return (
    <div className={styles.footer}>
      <ThemeToggle toggleTheme={props.toggleTheme} />
    </div>
  )
}
