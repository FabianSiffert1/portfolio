export interface PokemonTCGSeries {
  series: string
}

export interface PokemonSetName {
  name: string
}

export interface PokemonSetLogo {
  logo: string
}

export interface PokemonSetSymbol {
  symbol: string
}

export interface PokemonSet extends PokemonTCGSeries, PokemonSetName, PokemonSetSymbol, PokemonSetLogo {
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
    symbol: PokemonSetSymbol & string
    logo: PokemonSetLogo & string
  }
}
