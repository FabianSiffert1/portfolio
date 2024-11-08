import styles from './ProfileSection.module.scss'
import { profilePicture } from '../../../../ui/_globalAssetImports'


export default function ProfileSection() {
  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt="Fabian Siffert" />
      </div>
      <div className={styles.profileTextContainer}>
        <div className={styles.name}>Fabian Siffert</div>
        <div className={styles.job}>💻 Software Developer</div>
        <div className={styles.location}>📍 Duesseldorf, Germany</div>
      </div>
    </div>
  )
}
