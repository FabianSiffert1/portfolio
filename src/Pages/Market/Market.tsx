import React, { ReactElement, useEffect, useState } from 'react'
import Card from '../../Components/Card'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet, PokemonSetSeries } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Market.module.scss'

export default function Market() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [cards, setCards] = useState<PokemonCard[]>([])
  const [sets, setSets] = useState<PokemonSet[]>([])
  const [areCardsLoading, setCardsLoading] = useState(true)
  const [areSetSeriesLoading, setSeriesLoading] = useState(true)

  useEffect(() => {
    getAllCards()
    getSetSeries()
  }, [])

  const getSetSeries = () => {
    pokemonTCGAPI.set.all({ q: 'series:base' }).then((sets: PokemonSet[]) => {
      setSets(sets)
      setSeriesLoading(false)
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
  const seriesArray: ReactElement[] = []
  if (!areSetSeriesLoading && !areCardsLoading) {
    buildPokemonSeriesSet(sets, seriesArray)
    buildCardList(cards, cardArray)
    return (
      <div className={styles.market}>
        <div className={styles.seriesList}>{seriesArray}</div>
        <div className={styles.cardList}>{cardArray}</div>
        <pre>{JSON.stringify(cards, null, 2)}</pre>
      </div>
    )
  } else {
    return <div className={styles.loadingState}>Fetching data...</div>
  }
}

function buildCardList(cards: PokemonCard[], cardArray: React.ReactElement[]) {
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
}

function buildPokemonSeriesSet(pokemonSets: PokemonSet[], seriesArray: ReactElement[]) {
  const pokemonSetSeriesSet = new Set<PokemonSetSeries>()
  pokemonSets.forEach((set) => {
    pokemonSetSeriesSet.add(set.series)
  })
  pokemonSetSeriesSet.forEach((series) => {
    seriesArray.push(<div> {series} </div>)
  })
}
