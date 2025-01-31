import styles from './SocialsSection.module.scss'
import Section from '../../../../ui/components/Section'

export function SocialsSection() {
  return (
    <Section title="Get in Touch">
      {SocialSectionContent}
    </Section>
  );
}

const SocialSectionContent = (
  <div className={styles.socialsSection}>
    <div className={styles.email}>
      <a href={'mailto:siffert.dev+io@gmail.com'}>
        Email
      </a>
    </div>
    <div className={styles.github}>
      <a href={'https://github.com/FabianSiffert1'} target="_blank">
        Github
      </a>
    </div>
    <div className={styles.linkedIn}>
      <a href={'https://www.linkedin.com/in/fabian-siffert-5b2481289/'} target="_blank">
        LinkedIn
      </a>
    </div>
  </div>
);

