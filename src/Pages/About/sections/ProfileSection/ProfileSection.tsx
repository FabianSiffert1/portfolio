import styles from './ProfileSection.module.scss'
import { android, profilePicture } from '../../../../ui/_cozyAssets'

export default function ProfileSection() {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt='Fabian Siffert' width='1134' height='1742' />
      </div>
      <div className={styles.spacer} />
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Fabian Siffert</h1>
        <div className={styles.job}>Software Developer</div>
        <div className={styles.jobSubtitle}>
          (with a focus on
          <div className={styles.androidLogo}>
            <img src={android} alt='' aria-hidden='true' />
          </div>
          apps)
        </div>
        <div className={styles.location}>Duesseldorf, Germany</div>
      </div>
    </div>
  )
}
