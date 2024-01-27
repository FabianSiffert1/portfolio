import styles from '../Home/Home.module.scss'

export default function Market() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Welcome to the app</h2>
        <p className={styles.text__primary}>Primary texts</p>
        <p className={styles.text__secondary}>Secondary texts</p>
      </div>
    </div>
  )
}
