import React, { ReactElement, useEffect, useState } from 'react'
import Card from '../../Components/Card'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Market.module.scss'

export default function Market() {
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
    pokemonTCGAPI.card
      .all({
        q: 'name:palkia',
        orderBy: '-cardmarket.prices.trendPrice'
      })
      .then((cards: PokemonCard[]) => {
        setCards(cards)
        setCardsLoading(false)
      })
  }
  const cardArray: ReactElement[] = []
  if (!areSetsLoading && !areCardsLoading) {
    cards.forEach((card) => {
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
    return (
      <div className={styles.market}>
        {sets.length}
        <div className={styles.cardList}>{cardArray}</div>
        <pre>{JSON.stringify(cards, null, 2)}</pre>
      </div>
    )
  } else {
    return <div className={styles.loadingState}>Fetching data...</div>
  }
}
