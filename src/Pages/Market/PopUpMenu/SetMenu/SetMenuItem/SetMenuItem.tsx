import { PokemonCard } from '../../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSetLogo, PokemonSetName, PokemonSetSymbol } from '../../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllCardsOfASet } from '../../../../../util/api/pokemonTGC/querys'
import styles from './SetMenuItem.module.scss'

interface SetMenuItemProps {
  setName: PokemonSetName
  setSymbol: PokemonSetSymbol
  setLogo: PokemonSetLogo
  areCardsLoading: boolean
  currentlySelectedPokemonSet?: PokemonSetName
  setContentOfCardList: (newCardList: PokemonCard[]) => void
  setCardsLoading: (newState: boolean) => void
  toggleSetMenu: (setMenuOpen: boolean) => void
  setCurrentlySelectedPokemonSet: (set: PokemonSetName) => void
  setCurrentlySelectedPokemonSetLogoUrl: (logoUrl: PokemonSetLogo) => void
}

export default function SetMenuItem(props: SetMenuItemProps) {
  function fetchAllCardsFromASet(setName: PokemonSetName) {
    if (
      (setName != props.currentlySelectedPokemonSet && setName != undefined) ||
      (props.currentlySelectedPokemonSet == undefined && setName != undefined)
    ) {
      props.setCardsLoading(true)
      fetchAllCardsOfASet(setName)
        .then((pokemonCards) => {
          props.setCurrentlySelectedPokemonSet(setName)
          props.setContentOfCardList(pokemonCards)
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
              props.setCurrentlySelectedPokemonSetLogoUrl(props.setLogo)
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
        <img src={props.setSymbol as unknown as string} alt={props.setName.toString()} />
      </div>
      <div className={styles.setName}>
        <>{props.setName}</>
      </div>
    </div>
  )
}
