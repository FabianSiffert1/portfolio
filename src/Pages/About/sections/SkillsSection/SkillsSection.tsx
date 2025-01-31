import styles from './SkillsSection.module.scss'
import Section from '../../../../ui/components/Section'


export default function SkillsSection() {

  return (
    <Section title="Skills" >
      {SkillsSectionContent}
    </Section>
  )
}

const SkillsSectionContent = (
    <div className={styles.skillsSection}>
      <div className={styles.androidDevelopment}>
        <div className={styles.android}>
          Android
        </div>
        <div className={styles.kotlin}>
          Kotlin
        </div>
        <div className={styles.jetpackCompose}>
          Jetpack Compose
        </div>
      </div>
      <div className={styles.otherSkills}>
        Other Skills
      </div>
    </div>

)


