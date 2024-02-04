import React, { ReactElement } from 'react'
import Card from '../../../Components/Card'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'

export interface CardListProps {
  cards: PokemonCard[]
}

export default function CardList(props: CardListProps) {
  const cardArray: ReactElement<PokemonCard>[] = []

  props.cards.forEach((card) => {
    const cardmarketPriceTrend = card?.cardmarket?.prices?.trendPrice
    const cardmarketLink = card?.cardmarket?.url
    const setReleaseDate = new Date(card?.set?.releaseDate)
    const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })

    cardArray.push(
      <Card
        name={card.name}
        image={card.images.large}
        setName={card.set.name}
        key={card.id}
        cardmarketPriceTrend={cardmarketPriceTrend ? cardmarketPriceTrend : undefined}
        cardmarketLink={cardmarketLink ? cardmarketLink : undefined}
        setSymbol={card.set.images.symbol}
        setReleaseDate={setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())}
      />
    )
  })

  return <div className={styles.cardList}>{cardArray}</div>
}
