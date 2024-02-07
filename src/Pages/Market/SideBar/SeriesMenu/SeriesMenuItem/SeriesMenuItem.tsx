import React from 'react'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import styles from './SeriesMenuItem.module.scss'

interface SeriesMenuProps {
  seriesName: string
  seriesSymbol: string
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
  setSeriesLoadingState: (isSeriesLoading: boolean) => void
  isSeriesLoading: boolean
  setCurrentlySelectedPokemonSeries: (setCurrentlySelectedPokemonSeries: string) => void
}

export function SeriesMenuItem(props: SeriesMenuProps) {
  return (
    <div
      key={props.seriesName}
      className={styles.seriesMenuItem}
      onClick={() => {
        props.setCurrentlySelectedPokemonSeries(props.seriesName)
      }}
    >
      <span className={styles.seriesImage}>
        <img src={props.seriesSymbol} alt={props.seriesName} />
      </span>
      <span className={styles.seriesName}>{props.seriesName}</span>
    </div>
  )
}
