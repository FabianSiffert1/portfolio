import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { CardDetail } from '../CardDetail/CardDetail'
import styles from './Card.module.scss'

interface CardProps {
  card: PokemonCard
}

export default function Card(props: CardProps) {
  const [cardDetailsVisible, _setCardDetailsVisible] = useState(false)

  function setCardDetailsVisible(newState: boolean) {
    _setCardDetailsVisible(newState)
  }

  return (
    <div className={styles.cardContainer} key={props.card.id}>
      {cardDetailsVisible && <CardDetail card={props.card} toggleCardDetailsPopUp={setCardDetailsVisible} />}
      <div
        key={props.card.set.id}
        className={styles.card}
        style={props.card.images.small ? { backgroundImage: `url(${props.card.images.small})` } : undefined}
        onClick={() => setCardDetailsVisible(true)}
      />
      <div className={styles.cardInformationWrapper}>
        <div className={styles.cardName}>{props.card.name ? props.card.name : null}</div>
        {CardSubLines(props)}
      </div>
    </div>
  )
}

function CardSubLines(props: CardProps) {
  return (
    <div className={styles.cardAdditionalInformation}>
      <div className={styles.cardPrices}>
        <span className={styles.cardMarketPriceAndLink}>
          {props?.card?.cardMarket?.url ? (
            <Link to={props.card.cardMarket.url} target='_blank' rel='noopener noreferrer'>
              {props?.card?.cardMarket?.prices?.trendPrice?.toString().concat(' €')}
            </Link>
          ) : (
            props?.card?.cardMarket?.prices?.trendPrice?.toString().concat(' €')
          )}
        </span>
      </div>
    </div>
  )
}
