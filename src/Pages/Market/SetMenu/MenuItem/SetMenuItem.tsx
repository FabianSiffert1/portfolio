import React from 'react'
import { PokemonSet } from '../../../../util/api/pokemonTGC/model/PokemonSet'

import styles from './SetMenuItem.module.scss'

export interface SeriesSet {
  series: string
  symbol: string
}

export interface SetMenuItemProps {
  menuText: string
  symbol: string
  key: number
}

function SetMenuItem(props: SetMenuItemProps) {
  const menuText = props.menuText
  return (
    <div key={props.id} className={styles.setMenuItem}>
      <span className={styles.seriesImage}>
        <img src={props.symbol} alt={props.menuText} />
      </span>
      <span className={styles.seriesName}>{menuText}</span>
    </div>
  )
}

export function createSetMenuList(
  pokemonSets: PokemonSet[],
  uniquePokemonSeriesMap: Record<string, string>,
  seriesArray: React.ReactElement<SeriesSet>[]
) {
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
    seriesArray.push(<SetMenuItem menuText={series.series} symbol={series.imageLink} key={id} />)
    id++
  })
}
