import React from 'react'
import styles from './About.module.scss'
import ProfileSection from './sections/ProfileSection/ProfileSection'
import SkillsSection from './sections/SkillsSection/SkillsSection'
import CareerSection from './sections/CareerSection/CareerSection'
import SocialsSection from './sections/SocialsSection/SocialsSection'


export default function About() {

  return (
    <div className={styles.about}>
      <div className={styles.profile}>
        <ProfileSection />
      </div>
      <div className={styles.spacer} />
      <div className={styles.skills}>
          <SkillsSection />
      </div>
      <div className={styles.spacer} />

      <div className={styles.carreer}>
        <CareerSection />
      </div>

      <div className={styles.spacer} />
      <div className={styles.spacer} />

      <div className={styles.socials}>
        <SocialsSection />
      </div>

      <div className={styles.spacer} />
    </div>
  )
}
