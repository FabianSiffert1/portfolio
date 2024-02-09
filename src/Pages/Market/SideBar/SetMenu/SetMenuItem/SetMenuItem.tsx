import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { fetchAllCardsOfASet } from '../../../../../util/api/pokemonTGC/querys'
import styles from './SetMenuItem.module.scss'

interface SetMenuItemProps {
  setName: string
  setSymbol: string
  setContentOfCardList: (newCardList: PokemonCard[]) => void
  setCardsLoading: (newState: boolean) => void
  areCardsLoading: boolean
}

export default function SetMenuItem(props: SetMenuItemProps) {
  function fetchAllCardsFromASet(setName: string) {
    props.setCardsLoading(true)
    fetchAllCardsOfASet(setName)
      .then((pokemonCards) => {
        props.setContentOfCardList(pokemonCards)
        props.setCardsLoading(false)
      })
      .catch((error) => {
        console.error('SetMenuItem: Error fetching cards:', error)
        return []
      })
  }

  return (
    <div
      className={styles.setMenuItemContainer}
      onClick={
        !props.areCardsLoading
          ? async () => {
              fetchAllCardsFromASet(props.setName)
            }
          : undefined
      }
    >
      <div className={styles.setSymbol}>
        <img src={props.setSymbol} alt={props.setName} />
      </div>
      <div className={styles.setName}>{props.setName}</div>
    </div>
  )
}
