import React, { ReactElement, useEffect, useState } from 'react'
import { LoadingSpinner } from '../../../../Components/LoadingSpinner/LoadingSpinner'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllSetsOfASeries } from '../../../../util/api/pokemonTGC/querys'
import styles from './SetMenu.module.scss'
import SetMenuItem from './SetMenuItem/SetMenuItem'

interface SetMenuProps {
  currentlySelectedPokemonSeries: string
  toggleSetMenu: (setOpen: boolean) => void
  setMenuIsOpen: boolean
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SetMenu(props: SetMenuProps) {
  const [cardsLoading, setCardsLoading] = useState(false)
  const [allSetsFromASeries, setAllSetsFromASeries] = useState<PokemonSet[]>([])

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
    <div className={styles.setMenuContainer}>
      {cardsLoading ? (
        <div className={styles.loadingState}>
          <LoadingSpinner />
        </div>
      ) : undefined}
      {props.setMenuIsOpen ? (
        <div className={styles.popUpSetMenuWrapper}>
          <div className={styles.overlay} onClick={() => props.toggleSetMenu(false)} />
          <div className={styles.currentSeries}>{props.currentlySelectedPokemonSeries}</div>
          <div className={styles.setMenu} onClick={() => props.toggleSetMenu(false)}>
            {setArray}
          </div>
        </div>
      ) : undefined}
    </div>
  )
}
