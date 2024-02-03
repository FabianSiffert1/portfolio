import { useEffect, useState } from 'react'
import Card, { CardCategory, CardInterface } from '../../Components/Card'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Inventory.module.scss'

export default function Inventory() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)

  const [data, setData] = useState([])
  useEffect(() => {
    getAllCards()
  }, [])
  const [isLoading, setLoading] = useState(true)

  const cardAmount = 2
  const cardArray = []

  const getAllCards = () => {
    pokemonTCGAPI.card.find('base1-4').then((fetchedData) => {
      console.log(fetchedData.name)
      setData(fetchedData)
      setLoading(false)
    })
  }

  if (isLoading) {
    return <div className={styles.loadingState}>Fetching data...</div>
  } else {
    const cardArrayResult = getCardArray(cardAmount)
    cardArray.push(<Card id={data.id} name={data.name} />)
    for (let i = 0; i < cardArrayResult.length; i++) {
      cardArray.push(
        <Card id={i} category={cardArrayResult[i].category} name={cardArrayResult[i].name} price={cardArrayResult[i].price} key={i} />
      )
    }
  }
  return (
    <div className={styles.inventory}>
      <div className={styles.cardList}>{cardArray}</div>
    </div>
  )
}

function getCardArray(amountOfCardsToGenerate: number): CardInterface[] {
  const cardHelperArray: CardInterface[] = []
  for (let i = 0; i < amountOfCardsToGenerate; i++) {
    cardHelperArray.push({
      id: i,
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
