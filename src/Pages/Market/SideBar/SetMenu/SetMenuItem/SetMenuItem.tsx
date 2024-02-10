import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSetName } from '../../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllCardsOfASet } from '../../../../../util/api/pokemonTGC/querys'
import styles from './SetMenuItem.module.scss'

interface SetMenuItemProps {
  setName: PokemonSetName
  setSymbol: string
  areCardsLoading: boolean
  currentlySelectedPokemonSet?: PokemonSetName
  setContentOfCardList: (newCardList: PokemonCard[]) => void
  setCardsLoading: (newState: boolean) => void
  toggleSetMenu: (setMenuOpen: boolean) => void
  setCurrentlySelectedPokemonSet: (set: PokemonSetName) => void
}

export default function SetMenuItem(props: SetMenuItemProps) {
  function fetchAllCardsFromASet(setName: PokemonSetName) {
    if (setName != props.currentlySelectedPokemonSet || props.currentlySelectedPokemonSet == undefined) {
      props.setCardsLoading(true)
      fetchAllCardsOfASet(setName)
        .then((pokemonCards) => {
          props.setContentOfCardList(pokemonCards)
          props.setCurrentlySelectedPokemonSet(setName)
          props.setCardsLoading(false)
        })
        .catch((error) => {
          console.error('SetMenuItem: Error fetching cards:', error)
          return []
        })
    }
  }

  return (
    <div
      className={styles.setMenuItemContainer}
      onClick={
        !props.areCardsLoading
          ? async () => {
              fetchAllCardsFromASet(props.setName)
              props.toggleSetMenu(false)
            }
          : undefined
      }
    >
      <div
        className={styles.setSymbol}
        onClick={() => {
          props.toggleSetMenu(false)
        }}
      >
        <img src={props.setSymbol} alt={props.setName.toString()} />
      </div>
      <div className={styles.setName}>
        <>{props.setName}</>
      </div>
    </div>
  )
}
