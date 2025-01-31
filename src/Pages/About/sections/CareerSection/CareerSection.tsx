import styles from './CareerSection.module.scss'
import Section from '../../../../ui/components/Section'


export default function CareerSection() {

  return (
    <Section title="My career, in short" >
      {CareerSectionContent}
    </Section>
  )
}

const CareerSectionContent = (
    <div className={styles.careerSection}>
      <div className={styles.bachelor}>
        Bachelor of english and american studies, minoring in Philosophy @hhu
      </div>
      <div className={styles.volunteering}>
        Volunteering in South Africa @masifunde
      </div>
      <div className={styles.sipgate}>
        Apprenticeship: IT specialist in application development @sipgate
      </div>
      <div className={styles.fullTime}>
        Full time android/software developer @sipgate
      </div>
    </div>
  )

