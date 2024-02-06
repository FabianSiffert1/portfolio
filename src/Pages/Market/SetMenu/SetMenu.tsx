import React, { ReactElement } from 'react'
import { PokemonSet } from '../../../util/api/pokemonTGC/model/PokemonSet'
import MenuItem from './MenuItem/MenuItem'
import styles from './SetMenu.module.scss'

export interface SetMenuProps {
  pokemonSets: PokemonSet[]
}

export interface SeriesSet {
  series: string
}

export default function SetMenu(props: SetMenuProps) {
  const seriesArray: ReactElement<SeriesSet>[] = []
  const pokemonSetSeriesSet = new Set<SeriesSet>()

  createSetMenuLinks(props, pokemonSetSeriesSet, seriesArray)

  return <div className={styles.setMenu}>{seriesArray}</div>
}

function createSetMenuLinks(props: SetMenuProps, pokemonSetSeriesSet: Set<SeriesSet>, seriesArray: React.ReactElement<SeriesSet>[]) {
  props.pokemonSets.forEach((set) => {
    pokemonSetSeriesSet.add(set.series)
  })
  let id = 0
  pokemonSetSeriesSet.forEach((series) => {
    seriesArray.push(<MenuItem menuText={series} key={id} />)
    id++
  })
}
