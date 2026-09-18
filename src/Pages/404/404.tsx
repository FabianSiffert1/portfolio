import { Link } from 'react-router-dom'
import styles from './404.module.scss'

export default function ErrorPage() {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>404 - Not found</h1>
      <Link to='/'>go back</Link>
    </div>
  )
}
