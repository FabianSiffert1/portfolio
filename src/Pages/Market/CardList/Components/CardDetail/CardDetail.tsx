import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard, TcgPlayer, TcgPlayerPriceSet } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardDetails.module.scss'

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
          <CardBaseDetails card={props.card} />
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

function CardBaseDetails(props: PokemonCardProp) {
  return (
    <div className={styles.cardDetails}>
      <div className={styles.cardDetailColumnTitle}>{props.card.name}</div>
      <div className={styles.cardRarity}>{props.card.rarity}</div>
      <div className={styles.cardNumber}>
        {props.card.number}/{props.card.set.printedTotal}
      </div>
      {props.card.evolvesTo}
      {props.card.evolvesFrom && <div className={styles.evolvesFrom}>Evolves from: {props.card.evolvesFrom}</div>}
      <div className={styles.cardArtist}>Illus: {props.card.artist}</div>
    </div>
  )
}

function SetInformation(props: PokemonCardProp) {
  const setReleaseDate = new Date(props.card?.set?.releaseDate)
  const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
  const setReleaseString = setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())
  return (
    <div className={styles.setInformation}>
      <span className={styles.cardDetailColumnTitle}> {props.card?.set?.name ? props.card.set.name : null}</span>
      <span className={styles.setReleaseDate}>{setReleaseString}</span>
      <span>Total Cards: {props.card.set.total}</span>
      <span>Series: {props.card.set.series}</span>
      <span>{props.card.set.legalities.unlimited}</span>
      <span className={styles.setSymbol}>
        {props.card?.set?.images?.symbol ? <img src={props.card.set.images.symbol} alt={'setSymbol'} /> : null}
      </span>
    </div>
  )
}

function CardPrices(props: PokemonCardProp) {
  let tcgPlayerPriceList
  if (props.card.tcgplayer != undefined) {
    tcgPlayerPriceList = TcgPlayerComponent(props.card.tcgplayer)
  }
  return (
    <div className={styles.cardPricesContainer}>
      <div className={styles.cardDetailColumnTitle}>Cardmarket:</div>
      <div className={styles.cardMarket}>
        Trend price:
        {props?.card?.cardmarket?.url ? (
          <Link to={props.card.cardmarket.url} target='_blank' rel='noopener noreferrer'>
            {props?.card?.cardmarket?.prices?.trendPrice?.toString().concat(' €')}
          </Link>
        ) : (
          props?.card?.cardmarket?.prices?.trendPrice?.toString().concat(' €')
        )}
      </div>
      <div className={styles.tcgPlayer}>
        <div className={styles.cardDetailColumnTitle}>TCGPlayer:</div>
        {tcgPlayerPriceList}
      </div>
    </div>
  )
}

function TcgPlayerComponent(tcgPlayer: TcgPlayer) {
  return (
    <div>
      <h2>TcgPlayer</h2>
      {tcgPlayer.prices && (
        <div>
          <PriceSet name='Normal' priceSet={tcgPlayer.prices.normal} />
          <PriceSet name='Holofoil' priceSet={tcgPlayer.prices.holofoil} />
          <PriceSet name='Reverse Holofoil' priceSet={tcgPlayer.prices.reverseHolofoil} />
        </div>
      )}
    </div>
  )
}

interface PriceSetProps {
  name: string
  priceSet?: TcgPlayerPriceSet
}

function PriceSet({ name, priceSet }: PriceSetProps): ReactElement {
  if (priceSet != undefined) {
    return (
      <div>
        <h3>{name}</h3>
        <ul>
          {Object.entries(priceSet).map(([key, value]) => (
            <li key={key}>
              <strong>{key}</strong>: {value} €
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}
