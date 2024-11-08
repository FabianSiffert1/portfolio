import styles from './SkillsSection.module.scss'


export default function SkillsSection() {

  return (
    <div className={styles.skillsSection}>
      Skills
      <div className={styles.mainSkills}>
        <div className={styles.android}>
          Android
        </div>
        <div className={styles.kotlin}>
          kotlin
        </div>
        <div className={styles.jetpackCompose}>
          jetpackCompose
        </div>
      </div>
      <div className={styles.otherSkills}>
        other Skills
      </div>
    </div>
  )
}
