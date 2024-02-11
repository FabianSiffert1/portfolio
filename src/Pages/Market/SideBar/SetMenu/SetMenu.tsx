import React, { ReactElement, useEffect, useState } from 'react'
import { LoadingSpinner } from '../../../../Components/LoadingSpinner/LoadingSpinner'
import { PokemonCard } from '../../../../util/api/pokemonTGC/model/PokemonCard'
import { PokemonSet, PokemonSetName, PokemonTCGSeries } from '../../../../util/api/pokemonTGC/model/PokemonSet'
import { fetchAllSetsOfASeries } from '../../../../util/api/pokemonTGC/querys'
import styles from './SetMenu.module.scss'
import SetMenuItem from './SetMenuItem/SetMenuItem'

interface SetMenuProps {
  currentlySelectedPokemonSeries: PokemonTCGSeries
  toggleSetMenu: (setOpen: boolean) => void
  setMenuIsOpen: boolean
  setCardList: (newCardList: PokemonCard[]) => void
}

export default function SetMenu(props: SetMenuProps) {
  const [cardsLoading, setCardsLoading] = useState(false)
  const [allSetsFromASeries, setAllSetsFromASeries] = useState<PokemonSet[]>([])
  const [currentlySelectedPokemonSet, _setCurrentlySelectedPokemonSet] = useState<PokemonSetName | undefined>(undefined)

  function setCurrentlySelectedPokemonSet(set: PokemonSetName) {
    _setCurrentlySelectedPokemonSet(set)
  }

  useEffect(() => {
    setCardsLoading(true)
    setAllSetsFromASeries([])
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
        setSymbol={set.images.symbol}
        setContentOfCardList={props.setCardList}
        setCardsLoading={setCardsLoading}
        areCardsLoading={cardsLoading}
        toggleSetMenu={props.toggleSetMenu}
        currentlySelectedPokemonSet={currentlySelectedPokemonSet}
        setCurrentlySelectedPokemonSet={setCurrentlySelectedPokemonSet}
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
          <div className={styles.currentSeries}>
            <>{props.currentlySelectedPokemonSeries}</>
          </div>
          <div className={styles.setMenu}>{setArray}</div>
        </div>
      ) : undefined}
    </div>
  )
}
