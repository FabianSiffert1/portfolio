import styles from './SocialsSection.module.scss'
import Section from '../../../../ui/components/Section'
import ExternalLink from '../../../../ui/components/ExternalLink'

export default function SocialsSection() {
  return <Section title='Get in Touch'>{SocialSectionContent}</Section>
}

const SocialSectionContent = (
  <div className={styles.socialsSection}>
    <div className={styles.socialLink}>
      <div className={styles.email}>
        <ExternalLink href='mailto:siffert.dev+io@gmail.com'>Email</ExternalLink>
      </div>
    </div>
    <div className={styles.socialLink}>
      <div className={styles.linkedIn}>
        <ExternalLink href='https://www.linkedin.com/in/fabian-siffert-5b2481289/'>LinkedIn</ExternalLink>
      </div>
    </div>
    <div className={styles.socialLink}>
      <div className={styles.github}>
        <ExternalLink href='https://github.com/FabianSiffert1/'>Github</ExternalLink>
      </div>
    </div>
  </div>
)
