import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'
import Card from './Components/Card/Card'

export interface CardListProps {
  cards: PokemonCard[]
}

export default function CardList(props: CardListProps) {
  const cardArray: ReactElement<PokemonCard>[] = []
  const uniquePokemonSeriesMap: Record<string, PokemonCard> = {}
  props.cards.forEach((card) => {
    if (card.name != undefined) {
      if (!Object.prototype.hasOwnProperty.call(uniquePokemonSeriesMap, card.name)) {
        uniquePokemonSeriesMap[card.name] = card
      }
    }
  })
  const uniqueCardArray: {
    cardName: string
    card: PokemonCard
  }[] = Object.entries(uniquePokemonSeriesMap).map(([cardName, card]) => ({ cardName, card }))

  uniqueCardArray.forEach((cardObject) => {
    cardArray.push(<Card key={cardObject.card.id} card={cardObject.card} />)
  })

  return <div className={styles.cardList}>{cardArray}</div>
}
