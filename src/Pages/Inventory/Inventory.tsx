import Card, { CardCategory, CardInterface } from '../../Components/Card'
import pokemonTCGAPI from '../../util/api/pokemonTGC/pokemonTCGAPI'
import styles from './Inventory.module.scss'

export default function Inventory() {
  pokemonTCGAPI.configure(import.meta.env.VITE_POKEMON_TCG_API_KEY)
  pokemonTCGAPI.card.find('base1-4').then((card) => {
    console.log(card.name)
  })
  const cardAmount = 200
  const cardArray = []
  const cardArrayResult = getCardArray(cardAmount)

  for (let i = 0; i < cardArrayResult.length; i++) {
    cardArray.push(
      <Card id={i} category={cardArrayResult[i].category} name={cardArrayResult[i].name} price={cardArrayResult[i].price} key={i} />
    )
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
