import styles from './Card.module.scss'

export enum CardCategory {
  CHEAP = 'Cheap',
  MID = 'Medium',
  EXPENSIVE = 'Expensive'
}

interface CardInterface {
  id?: number
  name?: string
  category?: CardCategory
}

export default function Card(props: CardInterface) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>Card {props.id ? props.id : null}</div>
      <div className={styles.cardInformationContainer}>
        <div className={styles.cardName}>{props.name ? props.name : null}</div>
        <div className={styles.cardDescription}>{props.category ? props.category : null}</div>
      </div>
    </div>
  )
}
