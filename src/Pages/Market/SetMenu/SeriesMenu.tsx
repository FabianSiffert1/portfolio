import React, { ReactElement, useState } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../util/api/pokemonTGC/model/PokemonSet'
import { SeriesMenuItem } from './MenuItem/SeriesMenuItem'
import styles from './SeriesMenu.module.scss'

interface SetMenuProps {
  pokemonSets: PokemonSet[]
  setCardList: (newCardList: PokemonCard[]) => void
}

export interface SeriesSet {
  series: string
  symbol: string
}

export default function SeriesMenu(props: SetMenuProps) {
  const [seriesLoading, setSeriesLoading] = useState(false)
  const setLoadingState = (isLoading: boolean) => {
    setSeriesLoading(isLoading)
  }

  const seriesArray: ReactElement<SeriesSet>[] = []

  createSetMenuList(props.pokemonSets, seriesArray, props.setCardList, setLoadingState, seriesLoading)
  return (
    <div className={styles.seriesMenuContainer}>
      <span className={styles.seriesMenu}>{seriesArray}</span>
      {seriesLoading && <span className={styles.seriesLoadingIndicator}>Fetching Cards...</span>}
    </div>
  )
}

function createSetMenuList(
  pokemonSets: PokemonSet[],
  seriesArray: React.ReactElement<SeriesSet>[],
  setCardList: (newCardList: PokemonCard[]) => void,
  setSeriesLoadingState: (isLoading: boolean) => void,
  isSeriesLoading: boolean
) {
  const uniquePokemonSeriesMap: Record<string, string> = {}
  pokemonSets.forEach((set) => {
    if (!Object.prototype.hasOwnProperty.call(uniquePokemonSeriesMap, set.series)) {
      uniquePokemonSeriesMap[set.series] = set.images.symbol
    }
  })
  const uniqueSeriesArray: {
    series: string
    imageLink: string
  }[] = Object.entries(uniquePokemonSeriesMap).map(([series, imageLink]) => ({ series, imageLink }))
  let id = 0
  uniqueSeriesArray.forEach((series) => {
    seriesArray.push(
      <SeriesMenuItem
        seriesName={series.series}
        seriesSymbol={series.imageLink}
        key={id}
        setCardList={setCardList}
        setSeriesLoadingState={setSeriesLoadingState}
        isSeriesLoading={isSeriesLoading}
      />
    )
    id++
  })
}
