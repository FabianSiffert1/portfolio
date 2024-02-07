import { PokemonCard } from './model/PokemonCard'
import { PokemonSet } from './model/PokemonSet'
import pokemonTCGAPI from './pokemonTCGAPI'

export const fetchAllSets = async (series?: string): Promise<PokemonSet[]> => {
  try {
    return await pokemonTCGAPI.set.all({ q: series ? series : undefined, orderBy: 'releaseDate' })
  } catch (error) {
    console.error('Error fetching sets:', error)
    return []
  }
}

export async function fetchCards(pokemonName?: string): Promise<PokemonCard[]> {
  const pokemonNameQuery = pokemonName ? `name:${pokemonName.name} ` : ' '
  try {
    return await pokemonTCGAPI.card.all({
      q: `${pokemonNameQuery} `,
      orderBy: '-cardmarket.prices.trendPrice'
    })
  } catch (error) {
    console.error('Error fetching cards:', error)
    return []
  }
}
