import React from 'react'
import styles from './About.module.scss'
import ProfileSection from './components/ProfileSection/ProfileSection'
import SocialsSection from './components/SocialsSection/SocialsSection'


export default function About() {

  return (
    <div className={styles.about}>
      <ProfileSection />
      <SocialsSection />
    </div>
  )
}
