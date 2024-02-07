import React, { ReactElement } from 'react'
import Card from '../../../Components/Card'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'

export interface CardListProps {
  cards: PokemonCard[]
}

export default function CardList(props: CardListProps) {
  const cardArray: ReactElement<PokemonCard>[] = []
  const uniquePokemonSeriesMap: Record<string, PokemonCard> = {}
  props.cards.forEach((card) => {
    if (!Object.prototype.hasOwnProperty.call(uniquePokemonSeriesMap, card.name)) {
      uniquePokemonSeriesMap[card.name] = card
    }
  })
  const uniqueCardArray: {
    cardName: string
    card: PokemonCard
  }[] = Object.entries(uniquePokemonSeriesMap).map(([cardName, card]) => ({ cardName, card }))

  uniqueCardArray.forEach((card) => {
    const cardmarketPriceTrend = card?.card.cardmarket?.prices?.trendPrice
    const cardmarketLink = card?.card.cardmarket?.url
    const setReleaseDate = new Date(card.card?.set?.releaseDate)
    const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
    cardArray.push(
      <Card
        name={card.card.name}
        image={card.card.images.small}
        setName={card.card.set.name}
        key={card.card.id}
        cardmarketPriceTrend={cardmarketPriceTrend ? cardmarketPriceTrend : undefined}
        cardmarketLink={cardmarketLink ? cardmarketLink : undefined}
        setSymbol={card.card.set.images.symbol}
        setReleaseDate={setReleaseMonth.concat(' ').concat(setReleaseDate.getFullYear().toString())}
      />
    )
  })

  return (
    <div className={styles.cardList}>
      {cardArray.length}
      {cardArray}
    </div>
  )
}
