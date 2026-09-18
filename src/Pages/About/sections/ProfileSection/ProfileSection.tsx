import styles from './ProfileSection.module.scss'
import { profilePicture } from '../../../../ui/_cozyAssets'

export default function ProfileSection() {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt='Fabian Siffert' width='1134' height='1742' />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Fabian Siffert</h1>
        <div className={styles.rule} />
        <dl className={styles.fields}>
          <div className={styles.field}>
            <dt>Job</dt>
            <dd>Software Developer</dd>
          </div>
          <div className={styles.field}>
            <dt>Focus</dt>
            <dd>Android</dd>
          </div>
          <div className={styles.field}>
            <dt>Base</dt>
            <dd>Düsseldorf DE</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
