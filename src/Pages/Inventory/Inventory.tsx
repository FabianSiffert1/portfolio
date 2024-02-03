import React, { ReactElement, useEffect, useState } from 'react'
import Card from '../../Components/Card'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Inventory.module.scss'

export default function Inventory() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [cards, setCards] = useState<PokemonCard[]>([])
  const [sets, setSets] = useState<PokemonSet[]>([])

  useEffect(() => {
    getAllCards()
    getBaseSet()
  }, [])
  const [areCardsLoading, setCardsLoading] = useState(true)
  const [areSetsLoading, setSetsLoading] = useState(true)

  const getBaseSet = () => {
    pokemonTCGAPI.set.all({ q: 'series:base' }).then((sets: PokemonSet[]) => {
      setSets(sets)
      setSetsLoading(false)
    })
  }

  const getAllCards = () => {
    pokemonTCGAPI.card.all({ q: 'name:charizard', orderBy: '-set.releaseDate' }).then((cards: PokemonCard[]) => {
      setCards(cards.reverse())
      setCardsLoading(false)
    })
  }
  const cardArray: ReactElement[] = []
  if (!areSetsLoading && !areCardsLoading) {
    cards.forEach((card) => {
      const price = card?.cardmarket?.prices?.avg30

      cardArray.push(
        <Card
          id={card.id}
          name={card.name}
          image={card.images.large}
          setName={card.set.name}
          key={card.id}
          price={price ? price : undefined}
          setLogo={card.set.images.logo}
        />
      )
    })
    return (
      <div className={styles.inventory}>
        {sets.length}
        <div className={styles.cardList}>{cardArray}</div>
        <pre>{JSON.stringify(cards, null, 2)}</pre>
      </div>
    )
  } else {
    return <div className={styles.loadingState}>Fetching data...</div>
  }
}
