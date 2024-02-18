import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard, PokemonCardProp, TcgPlayer, TcgPlayerPriceSet } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardDetails.module.scss'

interface CardDetailsProps {
  card: PokemonCard
  toggleCardDetailsPopUp: (newState: boolean) => void
}

interface PriceSetProps {
  cardType: string
  priceSet?: TcgPlayerPriceSet
}

export function CardDetails(props: CardDetailsProps) {
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

export function CardBaseDetails(card: PokemonCardProp) {
  return (
    <div className={styles.cardBaseInformationContainer}>
      <div className={styles.cardDetailsColumnTitle}>{card.card.name}</div>
      <div className={styles.cardBaseInformation}>
        <div className={styles.cardBaseInformationRarity}>{card.card.rarity}</div>
        <div className={styles.cardBaseInformationNumber}>
          {card.card.number}/{card.card.set.printedTotal}
        </div>
        {card.card.evolvesTo}
        {card.card.evolvesFrom && <div className={styles.cardBaseInformationEvolvesFrom}>Evolves from: {card.card.evolvesFrom}</div>}
        <div className={styles.cardBaseInformationIllustrator}>Illus: {card.card.artist}</div>
      </div>
    </div>
  )
}

export function SetInformation(card: PokemonCardProp) {
  const setReleaseDate = new Date(card.card?.set?.releaseDate)
  const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
  const setReleaseString = setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())
  return (
    <div className={styles.setInformation}>
      <span className={styles.cardDetailsColumnTitle}> {card.card?.set?.name ? card.card.set.name : null}</span>
      <span className={styles.setReleaseDate}>{setReleaseString}</span>
      <span>Total Cards: {card.card.set.total}</span>
      <span>Series: {card.card.set.series}</span>
      <span>{card.card.set.legalities.unlimited}</span>
      <span className={styles.setSymbol}>
        {card.card?.set?.images?.symbol ? <img src={card.card.set.images.symbol} alt={'setSymbol'} /> : null}
      </span>
    </div>
  )
}

export function CardMarketPrices(card: PokemonCardProp) {
  return (
    <div className={styles.cardMarketPricesContainer}>
      <div className={styles.cardMarketHeader}>
        {card.card.cardmarket?.url ? (
          <Link to={card.card.cardmarket.url} target='_blank' rel='noopener noreferrer'>
            Cardmarket
          </Link>
        ) : (
          <> Cardmarket </>
        )}
      </div>
      <div className={styles.trendPrice}>Trend price: {card?.card?.cardmarket?.prices?.trendPrice?.toString().concat('€')}</div>
    </div>
  )
}

export function TcgPlayerPrices(props: PokemonCardProp) {
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

export function TcgPlayerComponent(tcgPlayer: TcgPlayer) {
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

export function PriceSet({ cardType, priceSet }: PriceSetProps): ReactElement {
  if (priceSet != undefined) {
    return (
      <div className={styles.tcgPlayerPriceSet}>
        <div className={styles.cardType}>
          <strong>{cardType}</strong>
        </div>
        <ul>
          {Object.entries(priceSet).map(
            ([key, value]) =>
              value && (
                <li key={key}>
                  {key}: {value}€
                </li>
              )
          )}
        </ul>
      </div>
    )
  } else {
    return <></>
  }
}
