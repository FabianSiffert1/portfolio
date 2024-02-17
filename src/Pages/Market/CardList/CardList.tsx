import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'
import { Card } from './Components/Card/Card'

export interface CardListProps {
  cards: PokemonCard[]
}

export default function CardList(props: CardListProps) {
  const cardArray: ReactElement<PokemonCard>[] = []

  props.cards.forEach((card) => {
    if (card.id != undefined) {
      cardArray.push(<Card key={card.id} card={card} />)
    }
  })

  return <div className={styles.cardList}>{cardArray}</div>
}
