import React, { useEffect, useState } from 'react'
import { LoadingSpinner } from '../../Components/LoadingSpinner/LoadingSpinner'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet, PokemonTCGSeries } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import { fetchAllSets, fetchSpecies } from '../../util/api/pokemonTGC/querys'
import CardList from './CardList/CardList'
import styles from './Market.module.scss'
import SeriesMenu from './PopUpMenu/SeriesMenu/SeriesMenu'
import SetMenu from './PopUpMenu/SetMenu/SetMenu'

export default function Market() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [cards, setCards] = useState<PokemonCard[]>([])
  const [sets, setSets] = useState<PokemonSet[]>([])
  const [areCardsLoading, setCardsLoading] = useState(true)
  const [setsLoading, setSetLoading] = useState(true)
  const [setMenuIsOpen, toggleSetMenuOpen] = useState(false)
  const baseSeries: PokemonTCGSeries = 'Base' as unknown as PokemonTCGSeries
  const [currentlySelectedPokemonSeries, _setCurrentlySelectedPokemonSeries] = useState<PokemonTCGSeries>(baseSeries)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const setCardList = (newCardList: PokemonCard[]) => {
    setCards(newCardList)
  }
  const toggleSetMenu = (setOpen: boolean) => {
    toggleSetMenuOpen(setOpen)
  }
  const setCurrentlySelectedPokemonSeries = (pokemonSeries: PokemonTCGSeries) => {
    _setCurrentlySelectedPokemonSeries(pokemonSeries)
  }

  useEffect(() => {
    const getCardData = async () => {
      if (cards.length == 0) {
        try {
          const result = await fetchSpecies('Charizard', 'base')
          setCards(result)
        } catch (error) {
          console.error('Error in Market - getCardData useEffect:', error)
        }
      }
    }

    getCardData().then(() => {
      setCardsLoading(false)
    })

    const getSetData = async () => {
      if (sets.length == 0) {
        try {
          const result = await fetchAllSets()
          setSets(result)
        } catch (error) {
          console.error('Error in Market - getSetData useEffect:', error)
        }
      }
    }

    getSetData().then(() => setSetLoading(false))
  }, [])

  if (!setsLoading) {
    return (
      <div className={styles.market}>
        <div className={styles.header} style={{ top: scrollY > 12 ? 0 : '7rem', paddingTop: scrollY > 12 ? '1rem' : 0 }}>
          <SeriesMenu
            pokemonSets={sets}
            setCardList={setCardList}
            toggleSetMenu={toggleSetMenu}
            currentlySelectedPokemonSeries={currentlySelectedPokemonSeries}
            setCurrentlySelectedPokemonSeries={setCurrentlySelectedPokemonSeries}
          />
          <SetMenu
            areCardsLoading={areCardsLoading}
            setCardsLoading={setCardsLoading}
            currentlySelectedPokemonSeries={currentlySelectedPokemonSeries}
            toggleSetMenu={toggleSetMenu}
            setMenuIsOpen={setMenuIsOpen}
            setCardList={setCardList}
          />
          {areCardsLoading ? (
            <div className={styles.loadingState}>
              <LoadingSpinner />
            </div>
          ) : undefined}
        </div>
        <div className={styles.cardListWrapper}>
          <CardList cards={cards} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.loadingState}>
        <LoadingSpinner />
      </div>
    )
  }
}
