import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { fetchAllCardsOfASet } from '../../../../../util/api/pokemonTGC/querys'
import styles from './SetMenuItem.module.scss'

interface SetMenuItemProps {
  setName: string
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SetMenuItem(props: SetMenuItemProps) {
  function fetchAllCardsFromASet(setName: string) {
    fetchAllCardsOfASet(setName)
      .then((pokemonCards) => {
        props.setCardList(pokemonCards)
      })
      .catch((error) => {
        console.error('SetMenuItem: Error fetching cards:', error)
        return []
      })
  }

  return (
    <div
      className={styles.setMenuItem}
      onClick={async () => {
        fetchAllCardsFromASet(props.setName)
      }}
    >
      {props.setName}
    </div>
  )
}
