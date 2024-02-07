import React, { useState } from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './SeriesMenuItem.module.scss'

export interface SeriesSet {
  series: string
  symbol: string
}

export interface SeriesMenuProps {
  seriesName: string
  seriesSymbol: string
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
}

function SeriesMenuItem(props: SeriesMenuProps) {
  const [seriesLoading, setSeriesLoading] = useState(false)

  async function fetchSeries(pokemonSeries: string) {
    setSeriesLoading(true)
    try {
      pokemonSeries = pokemonSeries.replace(/^(.*?)\s.*$/, '$1')
      const cardList: PokemonCard[] = await pokemonTCGAPI.card.all({
        q: `set.series:${pokemonSeries}`,
        orderBy: '-cardmarket.prices.trendPrice'
      })
      props.setCardList(cardList)
      setSeriesLoading(false)
    } catch (error) {
      console.error('Error fetching cards:', error)
      return []
    }
  }

  return (
    <div
      key={props.id}
      className={styles.seriesMenuItem}
      onClick={async () => {
        await fetchSeries(props.seriesName)
      }}
    >
      <span className={styles.seriesImage}>
        <img src={props.seriesSymbol} alt={props.seriesName} />
      </span>
      <span className={styles.seriesName}>{props.seriesName}</span>
      {seriesLoading ? <span className={styles.seriesLoading}>Fetching Cards....</span> : undefined}
    </div>
  )
}

export function createSetMenuList(
  pokemonSets: PokemonSet[],
  uniquePokemonSeriesMap: Record<string, string>,
  seriesArray: React.ReactElement<SeriesSet>[],
  setCardList: (newCardList: PokemonCard[]) => void
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
    seriesArray.push(<SeriesMenuItem seriesName={series.series} seriesSymbol={series.imageLink} key={id} setCardList={setCardList} />)
    id++
  })
}
