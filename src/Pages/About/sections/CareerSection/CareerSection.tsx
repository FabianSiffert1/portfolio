import styles from './CareerSection.module.scss'
import Section from '../../../../ui/components/Section'


export default function CareerSection() {

  return (
    <Section title="My career, in short">
      {CareerSectionContent}
    </Section>
  )
}

const CareerSectionContent = (
  <div className={styles.careerSection}>
    <div className={styles.employment}>
      <div className={styles.employer}>
        <a href={'https://www.hhu.de/'} target="_blank">
          @hhu
        </a>
      </div>
      <div className={styles.job}> Bachelor of english and american studies, minoring in Philosophy</div>
    </div>
    <div className={styles.employment}>
      <div className={styles.employer}>
        <a href={'https://www.masifunde.de/de'} target="_blank">
          @masifunde
        </a>
      </div>
      <div className={styles.job}> Volunteering in South Africa</div>
    </div>
    <div className={styles.employment}>
      <div className={styles.employer}>
        <a href={'https://sipgate.de'} target="_blank">
          @sipgate
        </a>
        </div>
      <div className={styles.job}>Apprenticeship: IT specialist in application development</div>
    </div>
    <div className={styles.employment}>
      <div className={styles.employer}>
        <a href={'https://sipgate.de'} target="_blank">
          @sipgate
        </a>
      </div>
      <div className={styles.job}> Full time android/software developer</div>
    </div>
  </div>
)

