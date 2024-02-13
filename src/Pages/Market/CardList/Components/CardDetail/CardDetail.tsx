import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard, TcgPlayer, TcgPlayerPriceSet } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardDetails.module.scss'

interface CardDetailProps {
  card: PokemonCard
  toggleCardDetailsPopUp: (newState: boolean) => void
}

interface PriceSetProps {
  cardType: string
  priceSet?: TcgPlayerPriceSet
}

interface PokemonCardProp {
  card: PokemonCard
}

export function CardDetail(props: CardDetailProps) {
  return (
    <div className={styles.cardDetailsWrapper} key={props.card.id}>
      <div className={styles.overlay} onClick={() => props.toggleCardDetailsPopUp(false)} />
      <div className={styles.cardDetailsContainer}>
        <div className={styles.cardLargeImage}>
          {props.card.images.large && <img src={props.card.images.large} alt={props.card.name} />}
        </div>
        <div className={styles.cardPrices}>
          <div className={styles.cardDetailsInformation}>
            <CardBaseDetails card={props.card} />
            <SetInformation card={props.card} />
            <CardMarketPrices card={props.card} />
          </div>
          <TcgPlayerPrices card={props.card} />
        </div>
      </div>
    </div>
  )
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

function CardMarketPrices(props: PokemonCardProp) {
  return (
    <div className={styles.cardMarketPricesContainer}>
      <div className={styles.cardDetailColumnTitle}>
        {' '}
        {props.card.cardmarket?.url ? (
          <Link to={props.card.cardmarket.url} target='_blank' rel='noopener noreferrer'>
            Cardmarket
          </Link>
        ) : (
          <> Cardmarket </>
        )}
      </div>
      <div className={styles.trendPrice}>Trend price: {props?.card?.cardmarket?.prices?.trendPrice?.toString().concat(' €')}</div>
    </div>
  )
}

function TcgPlayerPrices(props: PokemonCardProp) {
  let tcgPlayerPriceList
  if (props.card.tcgplayer != undefined) {
    tcgPlayerPriceList = TcgPlayerComponent(props.card.tcgplayer)
  }
  return (
    <div className={styles.tcgPlayerPricesContainer}>
      <div className={styles.tcgPlayer}>
        {props.card.tcgplayer?.url ? (
          <Link to={props.card.tcgplayer.url} target='_blank' rel='noopener noreferrer'>
            TCGPlayer
          </Link>
        ) : (
          <> TCGPlayer </>
        )}
      </div>
      <div className={styles.tcgPlayerPriceListContainer}>{tcgPlayerPriceList}</div>
    </div>
  )
}

function TcgPlayerComponent(tcgPlayer: TcgPlayer) {
  return (
    <div>
      {tcgPlayer.prices && (
        <div className={styles.tcgPlayerPriceList}>
          <PriceSet cardType='Normal' priceSet={tcgPlayer.prices.normal} />
          <PriceSet cardType='1st Edition Holofoil' priceSet={tcgPlayer.prices['1stEditionHolofoil']} />
          <PriceSet cardType='1st Edition' priceSet={tcgPlayer.prices['1stEdition']} />
          <PriceSet cardType='Unlimited Holofoil' priceSet={tcgPlayer.prices.unlimitedHolofoil} />
          <PriceSet cardType='Unlimited' priceSet={tcgPlayer.prices.unlimited} />
          <PriceSet cardType='Holofoil' priceSet={tcgPlayer.prices.holofoil} />
          <PriceSet cardType='Reverse Holofoil' priceSet={tcgPlayer.prices.reverseHolofoil} />
        </div>
      )}
    </div>
  )
}

function PriceSet({ cardType, priceSet }: PriceSetProps): ReactElement {
  if (priceSet != undefined) {
    return (
      <div className={styles.tcgPlayerPriceSet}>
        <div className={styles.cardDetailColumnTitle}>{cardType}</div>
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
