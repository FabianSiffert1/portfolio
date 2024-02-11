export interface PokemonTCGSeries {
  series: string
}

export interface PokemonSetName {
  name: string
}

export interface PokemonSet extends PokemonTCGSeries, PokemonSetName {
  id: string
  name: PokemonSetName & string
  series: PokemonTCGSeries & string
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
