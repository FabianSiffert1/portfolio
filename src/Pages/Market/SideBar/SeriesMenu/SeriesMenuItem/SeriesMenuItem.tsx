import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSetSeries } from '../../../../../util/api/pokemonTGC/model/PokemonSet'
import styles from './SeriesMenuItem.module.scss'

interface SeriesMenuProps {
  seriesName: PokemonSetSeries
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
  setSeriesLoadingState: (isSeriesLoading: boolean) => void
  isSeriesLoading: boolean
  setCurrentlySelectedPokemonSeries: (setCurrentlySelectedPokemonSeries: PokemonSetSeries) => void
  toggleSetMenu: (setOpen: boolean) => void
}

export function SeriesMenuItem(props: SeriesMenuProps) {
  const seriesName = props.seriesName as unknown as ReactElement
  return (
    <div
      className={styles.seriesMenuItem}
      onClick={() => {
        props.setCurrentlySelectedPokemonSeries(props.seriesName)
        props.toggleSetMenu(true)
      }}
    >
      <div className={styles.seriesName}>{seriesName}</div>
    </div>
  )
}
