import React from 'react'
import styles from './ProfileSection.module.scss'
import { profilePicture } from '../../../../util/ui/_globalAssetImports'


export default function ProfileSection() {

  return (
    <div className={styles.profileSection}>
      <div className={styles.profilePicture}>
        <img src={profilePicture} alt="Fabian Siffert" />
      </div>
      <div className={styles.profileText}>
        <p>Fabian Siffert</p>
        <p>Software Developer</p>
        <p>Duesseldorf, Germany</p>
      </div>
    </div>
  )
}
