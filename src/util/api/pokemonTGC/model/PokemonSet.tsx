export interface PokemonSetSeries {
  series: string
}

export interface PokemonSetName {
  name: string
}

export interface PokemonSet extends PokemonSetSeries, PokemonSetName {
  id: string
  name: PokemonSetName & string
  series: PokemonSetSeries & string
  printedTotal: number
  total: number
  legalities: {
    unlimited: string
  }
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: {
    symbol: string
    logo: string
  }
}
