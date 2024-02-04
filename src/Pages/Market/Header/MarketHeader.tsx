import React, { ReactElement } from 'react'
import { PokemonSet, PokemonSetSeries } from '../../../util/api/pokemonTGC/model/PokemonSet'
import styles from './MarketHeader.module.scss'

export interface MarketHeaderProps {
  pokemonSets: PokemonSet[]
}

export default function MarketHeader(props: MarketHeaderProps) {
  const seriesArray: ReactElement<PokemonSetSeries>[] = []
  const pokemonSetSeriesSet = new Set<PokemonSetSeries>()

  props.pokemonSets.forEach((set) => {
    pokemonSetSeriesSet.add(set.series)
  })
  
  pokemonSetSeriesSet.forEach((series) => {
    seriesArray.push(
      <>
        <div> {series} </div>
      </>
    )
  })

  return <div className={styles.marketHeader}>{seriesArray}</div>
}
