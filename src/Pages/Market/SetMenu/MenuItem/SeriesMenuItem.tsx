import React from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import pokemonTCGAPI from '../../../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './SeriesMenuItem.module.scss'

interface SeriesMenuProps {
  seriesName: string
  seriesSymbol: string
  key: number
  setCardList: (newCardList: PokemonCard[]) => void
  setSeriesLoadingState: (isSeriesLoading: boolean) => void
  isSeriesLoading: boolean
}

export function SeriesMenuItem(props: SeriesMenuProps) {
  async function fetchSeries(pokemonSeries: string) {
    console.log('Loading')
    props.setSeriesLoadingState(true)
    try {
      pokemonSeries = pokemonSeries.replace(/^(.*?)\s.*$/, '$1')
      const cardList: PokemonCard[] = await pokemonTCGAPI.card.all({
        q: `set.series:${pokemonSeries}`,
        orderBy: '-cardmarket.prices.trendPrice'
      })
      props.setSeriesLoadingState(false)
      props.setCardList(cardList)
    } catch (error) {
      console.error('Error fetching cards:', error)
      return []
    }
  }

  return (
    <div
      key={props.id}
      className={styles.seriesMenuItem}
      onClick={
        !props.isSeriesLoading
          ? async () => {
              await fetchSeries(props.seriesName)
            }
          : undefined
      }
    >
      <span className={styles.seriesImage}>
        <img src={props.seriesSymbol} alt={props.seriesName} />
      </span>
      <span className={styles.seriesName}>{props.seriesName}</span>
    </div>
  )
}
