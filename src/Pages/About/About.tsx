import React from 'react'
import styles from './About.module.scss'
import ProfileSection from './components/ProfileSection/ProfileSection'
import SocialsSection from './components/SocialsSection/SocialsSection'
import SkillsSection from './components/SkillsSection/SkillsSection'
import CareerSection from './components/CareerSection/CareerSection'


export default function About() {

  return (
    <div className={styles.about}>
      <div className={styles.profileAndSocials}>
        <ProfileSection />
        <SocialsSection />
      </div>
      <div className={styles.spacer}/>
      <div className={styles.skills}>
        <SkillsSection />
      </div>
      <div className={styles.spacer}/>
      <div className={styles.carreer}>
      <CareerSection/>
      </div>
      <div />
    </div>
  )
}
