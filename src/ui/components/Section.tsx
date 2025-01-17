import styles from './Section.module.scss'


interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export default function Section( props: SectionProps){
  return (
    <div className={styles.section}>
        <div className={styles.sectionTitle}>
          {props.title}
        </div>
      <div className={styles.sectionContent}>
        {props.content}
      </div>
    </div>
  )
}