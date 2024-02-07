import React from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { fetchAllCardsFromASeries } from '../../../../util/api/pokemonTGC/querys'
import styles from './SeriesMenuItem.module.scss'

interface SeriesMenuProps {
  seriesName: string
  seriesSymbol: string
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
  setSeriesLoadingState: (isSeriesLoading: boolean) => void
  isSeriesLoading: boolean
}

export function SeriesMenuItem(props: SeriesMenuProps) {
  function fetchAllCardsFromClickedPokemonSeries(pokemonSeries: string) {
    props.setSeriesLoadingState(true)
    fetchAllCardsFromASeries(pokemonSeries)
      .then((pokemonCards) => {
        props.setCardList(pokemonCards)
        props.setSeriesLoadingState(false)
      })
      .catch((error) => {
        console.error('Error fetching cards:', error)
        return []
      })
  }

  return (
    <div
      key={props.seriesName}
      className={styles.seriesMenuItem}
      onClick={
        !props.isSeriesLoading
          ? async () => {
              fetchAllCardsFromClickedPokemonSeries(props.seriesName)
            }
          : undefined
      }
    >
      <span className={styles.seriesImage}>
        <img src={props.seriesSymbol} alt={props.seriesName} />
      </span>
      <span className={styles.seriesName}>{props.seriesName}</span>
    </div>
  )
}
