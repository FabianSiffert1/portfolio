import { ReactElement, useEffect, useState } from 'react'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllCardsFromASeries, fetchAllSetsOfASeries } from '../../../../util/api/pokemonTGC/querys'
import styles from './SetMenu.module.scss'
import SetMenuItem from './SetMenuItem/SetMenuItem'

interface SetMenuProps {
  currentlySelectedPokemonSeries: string
  toggleSetMenu: () => void
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SetMenu(props: SetMenuProps) {
  const [setMenuIsOpen, toggleSetMenu] = useState(false)
  const [cardsLoading, setCardsLoading] = useState(false)
  const [allSetsFromASeries, setAllSetsFromASeries] = useState<PokemonSet[]>([])

  function fetchAllCardsFromClickedPokemonSeries(pokemonSeries: string) {
    setCardsLoading(true)
    console.log('loading cards')
    fetchAllCardsFromASeries(pokemonSeries)
      .then((pokemonCards) => {
        props.setCardList(pokemonCards)
        setCardsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching cards:', error)
        return []
      })
  }

  useEffect(() => {
    setCardsLoading(true)
    const getSetData = async () => {
      try {
        const result = await fetchAllSetsOfASeries(props.currentlySelectedPokemonSeries)
        setAllSetsFromASeries(result)
        setCardsLoading(false)
      } catch (error) {
        console.error('Error in Market - getSetData useEffect:', error)
      }
    }

    getSetData().then(() => setCardsLoading(false))
  }, [props.currentlySelectedPokemonSeries])

  const setArray: ReactElement<PokemonSet>[] = []
  allSetsFromASeries.forEach((set) => {
    setArray.push(
      <SetMenuItem
        key={set.name}
        setName={set.name}
        setCardList={props.setCardList}
        setCardsLoading={setCardsLoading}
        cardsLoading={cardsLoading}
      />
    )
  })
  return (
    <div className={styles.setMenu}>
      {cardsLoading ? <div>Fetching Cards</div> : null}
      <div
        className={styles.currentSeries}
        onClick={
          !cardsLoading
            ? async () => {
                fetchAllCardsFromClickedPokemonSeries(props.currentlySelectedPokemonSeries)
              }
            : undefined
        }
      >
        Series: {props.currentlySelectedPokemonSeries}
      </div>
      <div className={styles.setList}>{setArray}</div>
    </div>
  )
}
