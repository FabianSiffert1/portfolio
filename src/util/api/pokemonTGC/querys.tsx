import { PokemonCard, PokemonName } from './model/PokemonCard'
import { PokemonSet, PokemonSetSeries } from './model/PokemonSet'
import pokemonTCGAPI from './pokemonTCGAPI'

//TODO: add order Parameter and Order interface
export const fetchAllSets = async (series?: PokemonSetSeries): Promise<PokemonSet[]> => {
  try {
    return await pokemonTCGAPI.set.all({ q: series ? series : undefined, orderBy: 'releaseDate' })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}

export async function fetchCards(pokemonName?: PokemonName): Promise<PokemonCard[]> {
  const pokemonNameQuery = pokemonName ? `name:${pokemonName.name} ` : ' '
  try {
    return await pokemonTCGAPI.card.all({
      q: `${pokemonNameQuery} set.series:Base !set.name:Base`,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}
