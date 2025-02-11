import styles from './SkillsSection.module.scss'
import Section from '../../../../ui/components/Section'


export default function SkillsSection() {

  return (
    <Section title="Skills">
      {SkillsSectionContent}
    </Section>
  )
}

const SkillsSectionContent = (
  <div className={styles.skillsSection}>

    <div className={styles.main}>
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

      <div className={styles.spacer}/>

      <Section title={'and:'}>
        <div className={styles.softSkills}>
        <div className={styles.scrum}>
          Scrum
        </div>
          <div className={styles.po}>
            Product Owner Certificate
          </div>
        </div>
      </Section>
    </div>

    <div className={styles.subSkills}>
      <Section title="Also:">
        <div className={styles.otherSkills}>
          <div className={styles.react}>React</div>
          <div className={styles.typeScript}>Type- & JavaScript</div>
          <div className={styles.sass}>Css & Sass</div>
          <div className={styles.java}>Java</div>
        </div>
      </Section>
    </div>

  </div>

)


