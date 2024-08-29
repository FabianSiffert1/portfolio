import React from 'react'
import styles from './About.module.scss'
import ProfileSection from './components/ProfileSection'


export default function About() {

  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <ProfileSection/>
      </div>
    </div>
  )
}
