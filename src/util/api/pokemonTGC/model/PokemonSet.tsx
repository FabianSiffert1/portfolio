export interface PokemonSetSeries {
  series: string
}

export interface PokemonSet {
  id: string
  name: string
  series: PokemonSetSeries
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
