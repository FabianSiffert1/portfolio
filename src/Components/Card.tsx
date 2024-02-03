import styles from './Card.module.scss'

export interface CardProps {
  id?: string
  name?: string
  category?: string
  price?: number
  image?: string
  setLogo?: string
  setName?: string
}

function getCurrencyAndConvertPrice() {
  //TODO: implement correctly
  return ' €'
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}></div>
      <div className={styles.cardInformationContainer}>
        <div className={styles.cardName}>{props.name ? props.name : null}</div>
        <div className={styles.identifiers}>
          id: {props.id ? props.id : null} set: {props.setName ? props.setName : null}{' '}
          {props.setLogo ? (
            <div className={styles.setLogo}>
              <img src={props.setLogo} alt={'setLogo'} />
            </div>
          ) : null}
        </div>
        <div className={styles.cardDescription}>{props.category ? props.category : null}</div>
        <div className={styles.cardPrice}>{props.price ? props.price.toString().concat(getCurrencyAndConvertPrice()) : null}</div>
      </div>
    </div>
  )
}
