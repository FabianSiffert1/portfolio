import { useEffect, useState } from 'react'
import Card, { CardCategory, CardInterface } from '../../Components/Card'
import { PokemonCard } from '../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../util/api/pokemonTGC/model/PokemonSet'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Inventory.module.scss'

export default function Inventory() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [cards, setCards] = useState<PokemonCard[]>([])
  const [sets, setSets] = useState<PokemonSet[]>([])

  useEffect(() => {
    getAllCards()
    getBaseSet()
  }, [])
  const [areCardsLoading, setCardsLoading] = useState(true)
  const [areSetsLoading, setSetsLoading] = useState(true)

  const cardAmount = 2
  const cardArray = []

  const getBaseSet = () => {
    pokemonTCGAPI.set.all({ q: 'series:base' }).then((sets: PokemonSet[]) => {
      setSets(sets)
      setSetsLoading(false)
    })
  }

  const getAllCards = () => {
    pokemonTCGAPI.card.all({ q: 'name:charizard', orderBy: '-set.releaseDate' }).then((cards: PokemonCard[]) => {
      setCards(cards.reverse())
      setCardsLoading(false)
    })
  }

  function createDummyCards() {
    const cardArrayResult = getCardArray(cardAmount)
    for (let i = 0; i < cardArrayResult.length; i++) {
      cardArray.push(
        <Card id={i} category={cardArrayResult[i].category} name={cardArrayResult[i].name} price={cardArrayResult[i].price} key={i} />
      )
    }
  }

  if (!areSetsLoading && !areCardsLoading) {
    cards.forEach((card) => cardArray.push(<Card id={card.id} name={card.name} image={card.images.large} key={card.id} />))
    createDummyCards()
    return (
      <div className={styles.inventory}>
        {sets.length}
        <div className={styles.cardList}>{cardArray}</div>
      </div>
    )
  } else {
    return <div className={styles.loadingState}>Fetching data...</div>
  }
}

function getCardArray(amountOfCardsToGenerate: number): CardInterface[] {
  const cardHelperArray: CardInterface[] = []
  for (let i = 0; i < amountOfCardsToGenerate; i++) {
    cardHelperArray.push({
      id: i.toString(),
      category: randomEnum(CardCategory),
      name: `Name ${i}`,
      price: Math.floor(Math.random() * 100000) + 1
    })
  }
  return cardHelperArray
}

function randomEnum<T>(anEnum: T): T[keyof T] {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][]
  const randomIndex = Math.floor(Math.random() * enumValues.length)
  return enumValues[randomIndex]
}
