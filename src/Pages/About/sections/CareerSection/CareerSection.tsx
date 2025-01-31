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
        Bachelor of english and american studies, with a minor in Philosophy
      </div>
      <div className={styles.volunteering}>
        Volunteering in South Africa
      </div>
      <div className={styles.sipgate}>
        Apprenticeship: IT specialist in application development @sipgate in düsseldorf
      </div>
      <div className={styles.fullTime}>
        Full time software developer @sipgate in an android developer team
      </div>
    </div>
  )

