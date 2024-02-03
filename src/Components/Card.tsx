import styles from './Card.module.scss'

interface CardInterface {
  id?: number
}

export default function Card(props: CardInterface) {
  return <div className={styles.card}>Card {props.id ? props.id : null}</div>
}
