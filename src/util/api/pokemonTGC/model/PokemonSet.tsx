export interface PokemonSetSeries {
  series: string
}

export interface PokemonSet extends PokemonSetSeries {
  id: string
  name: string
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
