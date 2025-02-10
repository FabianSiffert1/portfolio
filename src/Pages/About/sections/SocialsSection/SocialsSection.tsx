import styles from './SocialsSection.module.scss'
import Section from '../../../../ui/components/Section'
import { Link } from 'react-router-dom'

export default function SocialsSection() {
  return (
    <Section title="Get in Touch">
      {SocialSectionContent}
    </Section>
  )
}

const SocialSectionContent = (
  <div className={styles.socialsSection}>
    <div className={styles.socialLink}>
      <div className={styles.email}>
        <Link to={'mailto:siffert.dev+io@gmail.com/'}>Email</Link>
      </div>
    </div>
    <div className={styles.socialLink}>
      <div className={styles.linkedIn}>
        <Link to={'https://www.linkedin.com/in/fabian-siffert-5b2481289/'} target={'_blank'}>LinkedIn</Link>
      </div>
    </div>
    <div className={styles.socialLink}>
      <div className={styles.github}>
        <Link to={'https://github.com/FabianSiffert1/'} target={'_blank'}>Github</Link>
      </div>
    </div>
  </div>
)

