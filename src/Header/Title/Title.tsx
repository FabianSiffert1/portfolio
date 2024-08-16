import { Link } from 'react-router-dom'
import styles from './Title.module.scss'

export default function Title() {
  return (
    <div className={styles.title}>
      <Link to={'/'}>fabian siffert</Link>
    </div>
  )
}
