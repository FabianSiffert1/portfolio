import styles from './CareerSection.module.scss'
import Section from '../../../../ui/components/Section'
import ExternalLink from '../../../../ui/components/ExternalLink'

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
        <ExternalLink href='https://www.hhu.de/'>&#123;@HHU&#125;</ExternalLink>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>2018-2019</div>
      <div className={styles.job}> Volunteering in South Africa</div>
      <div className={styles.employer}>
        <ExternalLink href='https://www.masifunde.de/'>&#123;@masifunde&#125;</ExternalLink>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>Oct.2021-Jan.2024</div>
      <div className={styles.job}>Apprenticeship: IT specialist in application development</div>
      <div className={styles.employer}>
        <ExternalLink href='https://www.sipgate.de/'>&#123;@sipgate&#125;</ExternalLink>
      </div>
    </div>
    <div className={styles.employment}>
      <div className={styles.timespan}>Jan.2024-Now</div>
      <div className={styles.job}> Full time android/software developer</div>
      <div className={styles.employer}>
        <ExternalLink href='https://sipgate.de'>&#123;@sipgate&#125;</ExternalLink>
      </div>
    </div>
  </div>
)
