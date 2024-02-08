import React, { ReactElement, useState } from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet, PokemonSetSeries } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import styles from './SeriesMenu.module.scss'
import { SeriesMenuItem } from './SeriesMenuItem/SeriesMenuItem'

interface SetMenuProps {
  pokemonSets: PokemonSet[]
  setCardList: (newCardList: PokemonCard[]) => void
  setCurrentlySelectedPokemonSeries: (currentlySelectSeries: string) => void
  toggleSetMenu: (setOpen: boolean) => void
}

export default function SeriesMenu(props: SetMenuProps) {
  const [seriesMenuIsOpen, toggleSeriesMenu] = useState(false)
  const [seriesLoading, setSeriesLoading] = useState(false)
  const setLoadingState = (isLoading: boolean) => {
    setSeriesLoading(isLoading)
  }
  const toggleOpen = () => {
    toggleSeriesMenu(!seriesMenuIsOpen)
  }

  const seriesArray: ReactElement<PokemonSetSeries>[] = []
  const uniqueSeries: Set<PokemonSetSeries> = new Set()

  props.pokemonSets.forEach((pokemonSet) => {
    return uniqueSeries.add(pokemonSet.series)
  })

  let id = 0

  uniqueSeries.forEach((series) => {
    seriesArray.push(
      <SeriesMenuItem
        seriesName={series}
        key={id}
        setCardList={props.setCardList}
        setSeriesLoadingState={setLoadingState}
        isSeriesLoading={seriesLoading}
        toggleSetMenu={props.toggleSetMenu}
        setCurrentlySelectedPokemonSeries={props.setCurrentlySelectedPokemonSeries}
      />
    )
    id++
  })
  return (
    <div className={styles.seriesMenuTopLevel}>
      {!seriesLoading && (
        <div className={styles.seriesMenuContainer}>
          <span className={styles.burger} onClick={toggleOpen}>
            <div className={styles.patty} />
            <div className={styles.patty} />
            <div className={styles.patty} />
          </span>
          {seriesMenuIsOpen && (
            <div className={styles.seriesMenuWrapper}>
              <div className={styles.overlay} onClick={toggleOpen} />
              <div className={styles.seriesMenu} onClick={toggleOpen}>
                {seriesArray}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
