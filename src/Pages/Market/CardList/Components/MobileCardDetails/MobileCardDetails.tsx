import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { CardBaseDetails, TcgPlayerComponent } from '../CardDetails/CardDetails'
import styles from './MobileCardDetails.module.scss'

interface MobileCardDetails {
  card: PokemonCard
  toggleCardDetailsPopUp: (newState: boolean) => void
}

export function MobileCardDetails(props: MobileCardDetails) {
  const setReleaseDate = new Date(props.card?.set?.releaseDate)
  const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
  const setReleaseString = setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())
  let tcgPlayerPriceList
  if (props.card.tcgplayer != undefined) {
    tcgPlayerPriceList = TcgPlayerComponent(props.card.tcgplayer)
  }
  return (
    <div className={styles.mobileCardDetailsContainer} key={props.card.id}>
      <div className={styles.overlay} onClick={() => props.toggleCardDetailsPopUp(false)} />
      <div className={styles.cardDetailsContainer}>
        <div className={styles.mobileCardDetailsHeader}>
          <div className={styles.closeOverlayButton} onClick={() => props.toggleCardDetailsPopUp(false)}>
            X
          </div>
        </div>
        <div className={styles.cardImageAndBaseInfo}>
          {props.card.images.large && <img src={props.card.images.large} alt={props.card.name} />}
          <CardBaseDetails card={props.card} />
        </div>
        <div className={styles.setHeader}>Set:</div>
        <div className={styles.cardSetInformationContainer}>
          <span className={styles.cardDetailColumnTitle}> {props.card?.set?.name ? props.card.set.name : null}</span>
          <span className={styles.setReleaseDate}>{setReleaseString}</span>
          <span>Total Cards: {props.card.set.total}</span>
          <span>Series: {props.card.set.series}</span>
          <span>{props.card.set.legalities.unlimited}</span>
          <span className={styles.setSymbol}>
            {props.card?.set?.images?.symbol ? <img src={props.card.set.images.symbol} alt={'setSymbol'} /> : null}
          </span>
        </div>
        <div className={styles.cardPrices}>
          <div className={styles.cardMarketPricesContainer}>
            <div className={styles.cardMarketLink}>
              {' '}
              {props.card.cardmarket?.url ? (
                <Link to={props.card.cardmarket.url} target='_blank' rel='noopener noreferrer'>
                  <strong> Cardmarket </strong>
                </Link>
              ) : (
                <strong> Cardmarket </strong>
              )}
            </div>
            <div className={styles.trendPrice}>Trend: {props?.card?.cardmarket?.prices?.trendPrice?.toString().concat('€')}</div>
            <div className={styles.trendPrice}>Avg: {props?.card?.cardmarket?.prices?.averageSellPrice?.toString().concat('€')}</div>
          </div>
          <div className={styles.tcgPlayerLink}>
            {props.card.tcgplayer?.url ? (
              <Link to={props.card.tcgplayer.url} target='_blank' rel='noopener noreferrer'>
                <strong> TCGPlayer</strong>
              </Link>
            ) : (
              <strong> TCGPlayer </strong>
            )}
          </div>
          <div className={styles.tcgPlayerPriceList}>{tcgPlayerPriceList}</div>
        </div>
      </div>
    </div>
  )
}
