import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export interface CardProps {
  name?: string
  averageSellPrice?: number
  image?: string
  setReleaseDate?: string
  setLogo?: string
  setName?: string
  cardmarketLink?: string
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}></div>
      <div className={styles.cardInformationContainer}>
        {CardBaseInformationRow(props)}
        {InformationColumn(props)}
      </div>
    </div>
  )
}

function CardBaseInformationRow(props: CardProps) {
  return (
    <div className={styles.cardBaseInformation}>
      <span className={styles.spacer} />
      <span className={styles.cardName}>{props.name ? props.name : null} </span>
      <span className={styles.setLogo}>{props.setLogo ? <img src={props.setLogo} alt={'setLogo'} /> : null}</span>
    </div>
  )
}

function InformationColumn(props: CardProps) {
  return (
    <div className={styles.identifiers}>
      <span className={styles.setName}>{props.setName ? props.setName : null}</span>
      <span className={styles.setReleaseDate}>{props.setReleaseDate}</span>
      <span className={styles.cardPrice}>
        {props.cardmarketLink ? (
          <Link to={props.cardmarketLink} target='_blank' rel='noopener noreferrer'>
            {props.averageSellPrice}
          </Link>
        ) : (
          props.averageSellPrice
        )}
      </span>
    </div>
  )
}
