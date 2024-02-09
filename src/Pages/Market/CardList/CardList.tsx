import React, { ReactElement, useState } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './CardList.module.scss'
import Card from './Components/Card/Card'

export interface CardListProps {
  cards: PokemonCard[]
}

export default function CardList(props: CardListProps) {
  const [cardDetailsVisible, _setCardDetailsVisible] = useState(false)

  function setCardDetailsVisible(newState: boolean) {
    _setCardDetailsVisible(newState)
  }

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
    cardArray.push(
      <Card
        key={cardObject.card.id}
        card={cardObject.card}
        cardDetailsVisible={cardDetailsVisible}
        setCardDetailsVisible={setCardDetailsVisible}
      />
    )
  })

  return (
    <div className={styles.cardList}>
      {cardDetailsVisible && <div>CARDDETAIL</div>}
      {cardArray}
    </div>
  )
}
