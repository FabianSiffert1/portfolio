import React, { ReactElement, useState } from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import styles from './SeriesMenu.module.scss'
import { SeriesMenuItem } from './SeriesMenuItem/SeriesMenuItem'

interface SetMenuProps {
  pokemonSets: PokemonSet[]
  setCardList: (newCardList: PokemonCard[]) => void
  setCurrentlySelectedPokemonSeries: (currentlySelectSeries: string) => void
  toggleSetMenu: (setOpen: boolean) => void
}

export interface SeriesSet {
  series: string
  symbol: string
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

  const seriesArray: ReactElement<SeriesSet>[] = []
  let id = 0
  const uniquePokemonSeriesMap: Record<string, string> = {}

  props.pokemonSets.forEach((set) => {
    if (!Object.prototype.hasOwnProperty.call(uniquePokemonSeriesMap, set.series)) {
      uniquePokemonSeriesMap[set.series] = set.images.symbol
    }
  })
  const uniqueSeriesArray: {
    series: string
    imageLink: string
  }[] = Object.entries(uniquePokemonSeriesMap).map(([series, imageLink]) => ({ series, imageLink }))

  uniqueSeriesArray.forEach((series) => {
    seriesArray.push(
      <SeriesMenuItem
        seriesName={series.series}
        seriesSymbol={series.imageLink}
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
    <>
      {seriesLoading && <div className={styles.seriesLoadingIndicator}>Fetching Cards...</div>}

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
    </>
  )
}
