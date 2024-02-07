import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'
import Card from './components/Card'

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

  uniqueCardArray.forEach((cardObject) => {
    const card = cardObject.card
    const cardmarketPriceTrend = card?.cardmarket?.prices?.trendPrice
    const cardmarketLink = card?.cardmarket?.url
    const setReleaseDate = new Date(card?.set?.releaseDate)
    const setReleaseMonth = setReleaseDate.toLocaleString('default', { month: 'long' })
    cardArray.push(
      <Card
        name={card.name}
        image={card.images.small}
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
