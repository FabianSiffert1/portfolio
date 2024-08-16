import { Link } from 'react-router-dom'
import styles from './404.module.scss'

export default function ErrorPage() {


  return (
    <div className={styles.errorPage}>
      404
      <br />
      <br />
      <Link to={'/'}>return to base</Link> <br />
    </div>
  )
}
