import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { fetchAllCardsOfASet } from '../../../../../util/api/pokemonTGC/querys'
import styles from './SetMenuItem.module.scss'

interface SetMenuItemProps {
  setName: string
  setCardList: (newCardList: PokemonCard[]) => void
  setCardsLoading: (newState: boolean) => void
  cardsLoading: boolean
}

export default function SetMenuItem(props: SetMenuItemProps) {
  function fetchAllCardsFromASet(setName: string) {
    props.setCardsLoading(true)
    fetchAllCardsOfASet(setName)
      .then((pokemonCards) => {
        props.setCardList(pokemonCards)
        props.setCardsLoading(false)
      })
      .catch((error) => {
        console.error('SetMenuItem: Error fetching cards:', error)
        return []
      })
  }

  return (
    <div
      className={styles.setMenuItem}
      onClick={
        !props.cardsLoading
          ? async () => {
              fetchAllCardsFromASet(props.setName)
            }
          : undefined
      }
    >
      {props.setName}
    </div>
  )
}
