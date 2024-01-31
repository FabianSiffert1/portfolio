import { Link, useRouteError } from 'react-router-dom'
import styles from './404.module.scss'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className={styles.errorPage}>
      Well that didnt work! <br />
      <br />
      <Link to={'/'}>return to base</Link> <br />
      <p>
        Error: &nbsp;
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
