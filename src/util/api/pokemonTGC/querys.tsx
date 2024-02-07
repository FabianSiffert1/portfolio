import { PokemonCard } from './model/PokemonCard'
import { PokemonSet } from './model/PokemonSet'
import pokemonTCGAPI from './pokemonTCGAPI'

export const fetchAllSetsFromASeries = async (series?: string): Promise<PokemonSet[]> => {
  try {
    return await pokemonTCGAPI.set.all({ q: series ? series : undefined, orderBy: 'releaseDate' })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}

export const fetchAllCardsOfASpecies = async (pokemonName: string): Promise<PokemonCard[]> => {
  try {
    return await pokemonTCGAPI.card.all({
      q: `name:${pokemonName}`,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}

export const fetchAllCardsFromASeries = async (pokemonSeries: string): Promise<PokemonCard[]> => {
  pokemonSeries = pokemonSeries.replace(/^(.*?)\s.*$/, '$1')
  try {
    return await pokemonTCGAPI.card.all({
      q: `set.series:${pokemonSeries} `,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}
