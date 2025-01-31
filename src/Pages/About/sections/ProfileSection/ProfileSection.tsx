import styles from './ProfileSection.module.scss'
import { android, profilePicture } from '../../../../ui/_cozyAssets'


export default function ProfileSection() {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt="Fabian Siffert" />
      </div>
      <div className={styles.spacer} />
      <div className={styles.textContainer}>
        <div className={styles.name}>Fabian Siffert</div>
        <div className={styles.job}>Software Developer</div>
        <div className={styles.jobSubtitle}>(with a focus on
          <div className={styles.androidLogo}>
            <img
              src={android}
              alt={'android'}
            />
          </div>
          apps)
        </div>
        <div className={styles.location}>Duesseldorf, Germany</div>
      </div>
    </div>
  )
}
