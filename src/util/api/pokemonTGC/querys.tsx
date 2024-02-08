import { PokemonCard } from './model/PokemonCard'
import { PokemonSet } from './model/PokemonSet'
import pokemonTCGAPI from './pokemonTCGAPI'

export const fetchAllSets = async (): Promise<PokemonSet[]> => {
  try {
    return await pokemonTCGAPI.set.all({ orderBy: 'releaseDate' })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}
export const fetchAllSetsOfASeries = async (series: string): Promise<PokemonSet[]> => {
  try {
    return await pokemonTCGAPI.set.all({ q: `series:"${series}"`, orderBy: 'releaseDate' })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}

export const fetchAllCardsOfASet = async (setName: string): Promise<PokemonCard[]> => {
  try {
    return await pokemonTCGAPI.card.all({
      q: `!set.name:"${setName}"`,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}

export const fetchSpecies = async (speciesName: string, setName?: string): Promise<PokemonCard[]> => {
  let args: object
  if (setName == undefined) {
    args = {
      q: `name:"${speciesName}"`,
      orderBy: '-cardmarket.prices.trendPrice'
    }
  } else {
    args = {
      q: `name:"${speciesName}" set.name:"${setName}"`,
      orderBy: '-cardmarket.prices.trendPrice'
    }
  }
  try {
    return await pokemonTCGAPI.card.all(args)
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}

export const fetchAllCardsFromASeries = async (pokemonSeries: string): Promise<PokemonCard[]> => {
  try {
    return await pokemonTCGAPI.card.all({
      q: `!set.series:"${pokemonSeries}"`,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}
