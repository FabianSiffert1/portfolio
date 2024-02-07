import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import { fetchAllSets, fetchCards } from '../../util/api/pokemonTGC/querys'
import CardList from './CardList/CardList'
import styles from './Market.module.scss'
import SeriesMenu from './SetMenu/SeriesMenu'

export default function Market() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [cards, setCards] = useState<PokemonCard[]>([])
  const [sets, setSets] = useState<PokemonSet[]>([])
  const [areCardsLoading, setCardsLoading] = useState(true)
  const [setsLoading, setSetLoading] = useState(true)

  const setCardList = (newCardList: PokemonCard[]) => {
    setCards(newCardList)
  }

  useEffect(() => {
    //const pkmSetSeries: PokemonSetSeries = { series: 'Sun & Moon' }
    const pkmName = { name: 'charizard' }
    const getCardData = async () => {
      try {
        const result = await fetchCards(pkmName)
        setCards(result)
      } catch (error) {
        console.error('Error in Market - getCardData useEffect:', error)
      }
    }

    getCardData().then(() => {
      setCardsLoading(false)
    })

    const getSetData = async () => {
      try {
        const result = await fetchAllSets()
        setSets(result)
      } catch (error) {
        console.error('Error in Market - getSetData useEffect:', error)
      }
    }

    getSetData().then(() => setSetLoading(false))
  }, [])

  if (!setsLoading && !areCardsLoading) {
    return (
      <div className={styles.market}>
        <div className={styles.header}>
          <SeriesMenu pokemonSets={sets} setCardList={setCardList} />
        </div>
        <div className={styles.cardList}>
          <CardList cards={cards} />
          <pre>{JSON.stringify(cards, null, 2)}</pre>
        </div>
      </div>
    )
  } else {
    return <div className={styles.loadingState}>Fetching data...</div>
  }
}
