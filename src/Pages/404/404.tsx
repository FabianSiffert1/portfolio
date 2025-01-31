import { Link } from 'react-router-dom'
import styles from './404.module.scss'

export default function ErrorPage() {


  return (
    <div className={styles.errorPage}>
      404 - Not found
      <br />
      <br />
      <Link to={'/'}>go back</Link>
      <br />
    </div>
  )
}
