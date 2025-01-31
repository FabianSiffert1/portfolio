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

      <Section title="mainly:">
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
      </Section>

      <Section title="Also:">
      <div className={styles.otherSkills}>
        <div className={styles.react}>React</div>
        <div className={styles.typeScript}>TypeScript</div>
        <div className={styles.sass}>Sass</div>
        <div className={styles.java}>Java</div>
        <div className={styles.javaScript}>JavaScript</div>
      </div>
      </Section>

    </div>

)


