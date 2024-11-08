import styles from './CareerSection.module.scss'


export default function CareerSection() {

  return (
    <div className={styles.careerSection}>
      <div className={styles.bachelor}>
      Bachelors of Arts →
      </div>
      <div className={styles.volunteering}>
        Volunteering in SA →
      </div>
      <div className={styles.sipgate}>
        Apprenticeship →
      </div>
      <div className={styles.fullTime}>
        Full time 🧑‍💻
      </div>
    </div>
  )
}
