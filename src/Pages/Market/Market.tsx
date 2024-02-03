import styles from './Market.module.scss'
import DisplayPosts from './temp'

export default function Market() {
  return (
    <div className={styles.market}>
      <DisplayPosts />
    </div>
  )
}
