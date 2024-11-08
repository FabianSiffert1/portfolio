import styles from './SocialsSection.module.scss'


export default function SocialsSection() {

  return (
    <div className={styles.socialsSection}>
      <div className={styles.email}>📧 Email</div>
      <div className={styles.github}>🧑‍💻 Github</div>
      <div className={styles.linkedIn}>🤝 LinkedIn</div>
    </div>
  )
}
