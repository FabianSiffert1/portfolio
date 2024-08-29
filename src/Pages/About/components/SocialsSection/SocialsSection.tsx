import React from 'react'
import styles from './SocialsSection.module.scss'
import { profilePicture } from '../../../../util/ui/_globalAssetImports'


export default function SocialsSection() {

  return (
    <div className={styles.socialsSection}>
    <p>Email</p>
    <p>Github</p>
    <p>LinkedIn</p>
    </div>
  )
}
