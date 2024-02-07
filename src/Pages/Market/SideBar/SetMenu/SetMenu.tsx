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
  const [setsLoading, setSetsLoading] = useState(false)
  const [allSetsFromASeries, setAllSetsFromASeries] = useState<PokemonSet[]>([])

  function fetchAllCardsFromClickedPokemonSeries(pokemonSeries: string) {
    fetchAllCardsFromASeries(pokemonSeries)
      .then((pokemonCards) => {
        props.setCardList(pokemonCards)
      })
      .catch((error) => {
        console.error('Error fetching cards:', error)
        return []
      })
  }

  useEffect(() => {
    setSetsLoading(true)
    const getSetData = async () => {
      try {
        const result = await fetchAllSetsOfASeries(props.currentlySelectedPokemonSeries)
        setAllSetsFromASeries(result)
        setSetsLoading(false)
      } catch (error) {
        console.error('Error in Market - getSetData useEffect:', error)
      }
    }

    getSetData().then(() => setSetsLoading(false))
  }, [props.currentlySelectedPokemonSeries])

  const setArray: ReactElement<PokemonSet>[] = []
  allSetsFromASeries.forEach((set) => {
    setArray.push(<SetMenuItem setName={set.name} setCardList={props.setCardList} />)
  })
  return (
    !setsLoading && (
      <div className={styles.setMenu}>
        <div
          className={styles.currentSeries}
          onClick={async () => {
            fetchAllCardsFromClickedPokemonSeries(props.currentlySelectedPokemonSeries)
          }}
        >
          Series: {props.currentlySelectedPokemonSeries}
        </div>
        <div className={styles.setList}>{setArray}</div>
      </div>
    )
  )
}
