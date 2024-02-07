import React, { ReactElement } from 'react'
import { PokemonCard } from '../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../util/api/pokemonTGC/model/PokemonSet'
import { createSetMenuList, SeriesSet } from './MenuItem/SeriesMenuItem'
import styles from './SeriesMenu.module.scss'

export interface SetMenuProps {
  pokemonSets: PokemonSet[]
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SeriesMenu(props: SetMenuProps) {
  const seriesArray: ReactElement<SeriesSet>[] = []
  const pokemonSetSeriesSet = new Set<SeriesSet>()

  createSetMenuList(props.pokemonSets, pokemonSetSeriesSet, seriesArray, props.setCardList)

  return <div className={styles.setMenu}>{seriesArray}</div>
}
