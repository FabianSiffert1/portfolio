import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { cardMarket } from '../../../../../util/ui/_globalAssetImports'
import styles from './CardDetail.module.scss'

interface CardDetailProps {
  card: PokemonCard
  toggleCardDetailsPopUp: (newState: boolean) => void
}

export function CardDetail(props: CardDetailProps) {
  return (
    <div className={styles.cardDetailsWrapper} key={props.card.id}>
      <div className={styles.overlay} onClick={() => props.toggleCardDetailsPopUp(false)} />
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardLargeImage}>
          {props.card.images.large && <img src={props.card.images.large} alt={props.card.name} />}
        </div>
        <div className={styles.cardDetailsInformation}>
          <div className={styles.cardDetails}>
            <div className={styles.cardName}>{props.card.name}</div>
            <div className={styles.cardNumber}>
              {props.card.number}/{props.card.set.printedTotal}
            </div>
            <div className={styles.evolvesFrom}>Evolves from: {props.card.evolvesFrom}</div>
            <div className={styles.cardArtist}>Artist: {props.card.artist}</div>
          </div>
          <SetInformation card={props.card} />
          <CardPrices card={props.card} />
        </div>
      </div>
    </div>
  )
}

interface PokemonCardProp {
  card: PokemonCard
}

function SetInformation(props: PokemonCardProp) {
  const setReleaseDate = new Date(props.card?.set?.releaseDate)
  const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
  const setReleaseString = setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())
  return (
    <div className={styles.setInformation}>
      <span className={styles.setSymbol}>
        {props.card?.set?.images?.symbol ? <img src={props.card.set.images.symbol} alt={'setSymbol'} /> : null}
      </span>
      <span className={styles.setName}> {props.card?.set?.name ? props.card.set.name : null}</span>
      <span className={styles.setReleaseDate}>{setReleaseString}</span>
    </div>
  )
}

function CardPrices(props: PokemonCardProp) {
  return (
    <div className={styles.cardPricesContainer}>
      <div className={styles.cardMarket}>
        <img src={cardMarket} alt={'cardMarket'} />
        Trend price:{' '}
        {props.card.cardmarket.url ? (
          <Link to={props.card.cardmarket.url} target='_blank' rel='noopener noreferrer'>
            {props.card.cardmarket.prices.trendPrice?.toString().concat(' €')}
          </Link>
        ) : (
          props.card.cardmarket.prices.trendPrice?.toString().concat(' €')
        )}
        <div className={styles.cardMarketSpecies}>
          <Link to={`https://www.cardmarket.com/en/Pokemon/Species/${props.card.name}`} target='_blank' rel='noopener noreferrer'>
            Species
          </Link>
        </div>
      </div>
    </div>
  )
}