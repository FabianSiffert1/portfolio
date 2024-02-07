import React, { ReactElement } from 'react'
import { PokemonSet } from '../../../util/api/pokemonTGC/model/PokemonSet'
import { createSetMenuList, SeriesSet } from './MenuItem/SetMenuItem'
import styles from './SetMenu.module.scss'

export interface SetMenuProps {
  pokemonSets: PokemonSet[]
}

export default function SetMenu(props: SetMenuProps) {
  const seriesArray: ReactElement<SeriesSet>[] = []
  const pokemonSetSeriesSet = new Set<SeriesSet>()

  createSetMenuList(props.pokemonSets, pokemonSetSeriesSet, seriesArray)

  return <div className={styles.setMenu}>{seriesArray}</div>
}
