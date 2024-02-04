import { Link } from 'react-router-dom'
import styles from './Card.module.scss'

export interface CardProps {
  name?: string
  cardmarketPriceTrend?: number
  image?: string
  setReleaseDate?: string
  setSymbol?: string
  setName?: string
  cardmarketLink?: string
}

export default function Card(props: CardProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card} style={props.image ? { backgroundImage: `url(${props.image})` } : undefined}></div>
      <div className={styles.cardInformationWrapper}>
        {CardNameAndSetLogo(props)}
        {CardAdditionalInformation(props)}
      </div>
    </div>
  )
}

function CardNameAndSetLogo(props: CardProps) {
  return <div className={styles.cardName}>{props.name ? props.name : null}</div>
}

function CardSetAndSymbol(props: CardProps) {
  return (
    <div className={styles.setNameAndSymbol}>
      <span className={styles.setName}>
        {props.setName ? props.setName : null}
        {props.setSymbol ? <img src={props.setSymbol} alt={'setSymbol'} /> : null}
      </span>
    </div>
  )
}

function CardAdditionalInformation(props: CardProps) {
  return (
    <div className={styles.cardAdditionalInformation}>
      {CardSetAndSymbol(props)}
      <span className={styles.setReleaseDate}>{props.setReleaseDate}</span>
      <div className={styles.cardPrices}>
        <span className={styles.cardMarketPriceAndLink}>
          {props.cardmarketLink ? (
            <Link to={props.cardmarketLink} target='_blank' rel='noopener noreferrer'>
              {props.cardmarketPriceTrend?.toString().concat(' €')}
            </Link>
          ) : (
            props.cardmarketPriceTrend?.toString().concat(' €')
          )}
        </span>
      </div>
    </div>
  )
}
