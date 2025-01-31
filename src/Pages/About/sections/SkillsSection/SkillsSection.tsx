import styles from './SkillsSection.module.scss'
import Section from '../../../../ui/components/Section'


export default function SkillsSection() {

  return (
    <Section title="Skills" content={
      SkillsSectionContent()
    } />
  )
}


function SkillsSectionContent() {
  return (
    <div className={styles.skillsSection}>
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