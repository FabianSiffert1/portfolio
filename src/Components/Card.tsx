import styles from './Card.module.scss'

export enum CardCategory {
  CHEAP = 'Cheap',
  MID = 'Medium',
  EXPENSIVE = 'Expensive'
}

export interface CardInterface {
  id?: string
  name?: string
  category?: CardCategory
  price?: number
  image?: string
}

function getCurrencyAndConvertPrice() {
  //TODO: implement correctly
  return ' €'
}

export default function Card(props: CardInterface) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}>
        Card {props.id ? props.id : null}
      </div>
      <div className={styles.cardInformationContainer}>
        <div className={styles.cardName}>{props.name ? props.name : null}</div>
        <div className={styles.cardDescription}>{props.category ? props.category : null}</div>
        <div className={styles.cardPrice}>{props.price ? props.price.toString().concat(getCurrencyAndConvertPrice()) : null}</div>
      </div>
    </div>
  )
}
