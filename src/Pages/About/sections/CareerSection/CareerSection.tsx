import styles from './CareerSection.module.scss'
import Section from '../../../../ui/components/Section'
import { Link } from 'react-router-dom'

export default function CareerSection() {
  return <Section title='My career, in short'>{CareerSectionContent}</Section>
}

const CareerSectionContent = (
  <div className={styles.careerSection}>
    <div className={styles.employment}>
      <div className={styles.timespan}>2015-2021</div>
      <div className={styles.job}> Bachelor of english and american studies</div>
      <div className={styles.jobSubtitle}>With a minor in Philosophy</div>
      <div className={styles.employer}>
        <Link to={'https://www.hhu.de/'} target='_blank'>
          @HHU
        </Link>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>2018-2019</div>
      <div className={styles.job}> Volunteering in South Africa</div>
      <div className={styles.employer}>
        <Link to={'https://www.masifunde.de/'} target='_blank'>
          @masifunde
        </Link>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>Oct.2021-Jan.2024</div>
      <div className={styles.job}>Apprenticeship: IT specialist in application development</div>
      <div className={styles.employer}>
        <Link to={'https://www.sipgate.de/'} target='_blank'>
          @sipgate
        </Link>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>Jan.2024-Now</div>
      <div className={styles.job}> Full time android/software developer</div>
      <div className={styles.employer}>
        <a href={'https://sipgate.de'} target='_blank'>
          @sipgate
        </a>
      </div>
    </div>
  </div>
)
