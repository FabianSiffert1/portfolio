import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonTCGSeries } from '../../../../../util/api/pokemonTGC/model/PokemonSet'
import styles from './SeriesMenuItem.module.scss'

interface SeriesMenuProps {
  seriesName: PokemonTCGSeries
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
  setSeriesLoadingState: (isSeriesLoading: boolean) => void
  isSeriesLoading: boolean
  setCurrentlySelectedPokemonSeries: (setCurrentlySelectedPokemonSeries: PokemonTCGSeries) => void
  toggleSetMenu: (setOpen: boolean) => void
}

export function SeriesMenuItem(props: SeriesMenuProps) {
  const seriesName = props.seriesName as unknown as ReactElement
  return (
    <div
      className={styles.seriesMenuItemContainer}
      onClick={() => {
        props.setCurrentlySelectedPokemonSeries(props.seriesName)
        props.toggleSetMenu(true)
      }}
    >
      <div className={styles.seriesName}>{seriesName}</div>
    </div>
  )
}
